const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ddpletcher:nZagY1NgTNRJTNjz@taskmanagercluster.mmrr5.mongodb.net/?retryWrites=true&w=majority&appName=taskManagerCluster",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
