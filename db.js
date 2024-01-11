const { connect } = require("mongoose");

const connectDb = async () => {
  try {
    await connect(process.env.MONGODB_URI || "mongodb+srv://sebas16cely:68ekljJAgmJucR6D@cluster0.wzd4qpr.mongodb.net/?retryWrites=true&w=majority");
    console.log("Mongodb connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDb };
