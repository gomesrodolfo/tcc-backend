require('dotenv').config()

const adminUsername = process.env.DATABASE_USERNAME;
const adminPassword = process.env.DATABASE_PASSWORD;

const mongoose = require("mongoose")

async function main() {
  try {
    mongoose.set("strictQuery", true)

    await mongoose.connect(`mongodb+srv://${adminUsername}:${adminPassword}@cluster0.raqm1sr.mongodb.net/tcc-backend`);
    
    console.log("MongoDB is connect!")
  } catch (error) {
    console.log(`Erro:${error}`)
  }
}

module.exports = main;