const express = require("express");
const cors = require("cors");
const app = express();
// const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://couavouxgroupe:J93IQ8T81GUlnJBC@cluster-eat-machine.aofeed2.mongodb.net/eat_machine";

const mealsRoutes = require("./routes/listMealRoutes");
const foodStockNutritionalValueRoutes = require("./routes/foodStockNutritionalValueRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const foodBindRoutes = require("./routes/foodBindRoutes");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// mongoose
//   .connect(
//     "mongodb+srv://couavouxgroupe:J93IQ8T81GUlnJBC@cluster-eat-machine.aofeed2.mongodb.net/eat_machine"
//   )
//   .then(() => {
//     console.log("Connexion à la base de données");
//   })
//   .catch((error) => {
//     console.error("Erreur de connexion à la base de données:", error);
//   });

console.log("test de log");

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

app.use("/api/meals", mealsRoutes);
app.use("/api/foodsNutritional", foodStockNutritionalValueRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/foodBind", foodBindRoutes);

app.use((req, res) => {
  res.json({ message: "Connecté a l'api" });
});

run().catch(console.dir);

module.exports = app;
