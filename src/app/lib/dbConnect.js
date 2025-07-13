import { MongoClient, ServerApiVersion } from "mongodb";
let db;

export const connectDB = async () => {
  if (db) return db;

  try {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();

    await client.db('admin').command({ ping: 1 });
    console.log("✅ MongoDB connected successfully");

    db = client.db("collegedb");
    return db;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
