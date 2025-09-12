import mongoose from "mongoose";
let initialized = false;
export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    const MONGODB = process.env.MONGODB_URI;
    //console.log(MONGODB_URI);
    await mongoose.connect(MONGODB, {
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
