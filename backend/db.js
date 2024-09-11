const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://sakshichaurasia66:5sakshi12345@cluster0.8pr1d.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray();
    console.log();
  } catch (err) {
    console.error("Error connecting to MongoDB or fetching data", err);
  }
};

module.exports = mongoDB;
