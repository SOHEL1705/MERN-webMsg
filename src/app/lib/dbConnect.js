import mongoose from "mongoose";

// Initialize database connection isConnected is 0 because it is not connected 1 is connected
const  connection = { isConnected: 0 };

async function dbConnect() {
  // Check if already connected
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  // Use existing connection if available
  if (mongoose.connection.readyState >= 1) {
    connection.isConnected = mongoose.connection.readyState;
    console.log("Reusing existing database connection");
    return;
  }

  // Establish new connection
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(db , "this is for testing")
    connection.isConnected = db.connections[0].readyState;
    console.log(db.connections,"this is for testing")
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Error connecting to database:", error);
    //this is to exit the process
    process.exit(1); 
  }
}

export default dbConnect;
