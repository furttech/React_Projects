import { MongoClient } from "mongodb";

const conString = process.env.URI || "";

const client = new MongoClient(conString);

let conn;

try{
    console.log("Connection to Local Mongodb!");
    conn = await client.connect();
}catch(e){
    console.error(e);
}

let db = conn.db("blog");

export default db;