import express from "express";
import env from "dotenv";
env.config();
import connectDatabase from "./db.js";
import router from "./controller/mes.js";
const app = express();
const port = 8000;

app.use(express.json());
import cors from "cors";

// Enable CORS for all domains or specific domain
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/hello", (req, res) => {
  res.send("hello raviklant");
});
app.use("/api", router);

connectDatabase();
app.listen(port, () => {
  console.log("server listening on port 8000");
});
