import { MongoClient } from "mongodb";

const connectionString = process.env.URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  console.log("Connecting to MongoDB Local");
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("blog");

export default db;