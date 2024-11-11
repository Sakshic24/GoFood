const express = require("express");
const cors = require("cors");
const app = express();

const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "MynameisEndtoEnd$#";

// app.use(cors());

router.post(
  "/createuser",
  [
    body("name").notEmpty().withMessage("Name is required."),
    body("email").isEmail().withMessage("Invalid email format."),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long."),
    body("address").notEmpty().withMessage("Address is required."),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      const { name, email, address } = req.body;

      await User.create({
        name,
        password: secPassword,
        email,
        address,
      });
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email").isEmail().withMessage("Invalid email format."),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long."),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;

      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct credentials" });
      }

      const isMatch = await bcrypt.compare(password, userData.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct credentials" });
      }
      const data = {
        user: {
          id: userData.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);
      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  }
);

module.exports = router;
