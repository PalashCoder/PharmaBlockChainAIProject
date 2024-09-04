import mongoose from "mongoose";

async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("DB Connected");
    });
    connection.on("error", (error) => {
      console.log("DB Connection error" + error);
      process.exit();
    });
  } catch (error) {
    console.log("Something Went Wrong at DB connection time.");
    console.log(error);
  }
}

export default connect;
