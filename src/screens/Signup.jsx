import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  console.log(credentials);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Credentials before submitting:", credentials);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/createuser",
        {
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          address: credentials.location,
        }
      );
    } catch (error) {
      console.error("Error:", error);
      // Optionally display an error message to the user
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={credentials.location}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to="/login" className="m-3 btn btn-danger">
          Already a user
        </Link>
      </form>
    </div>
  );
};

export default Signup;
