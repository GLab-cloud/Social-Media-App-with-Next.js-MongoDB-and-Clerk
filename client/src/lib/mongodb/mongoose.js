import mongoose from "mongoose";
let initialized = false;
export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    await mongoose.connect(MONGODB_URI, {
      dbName: "SocialMediaApp",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    initialized = true;
  } catch (error) {
    console.log("Error connecting to MongoDb", error);
  }
};
