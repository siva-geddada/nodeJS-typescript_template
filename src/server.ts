import express from "express";
import { env } from "./config/dotenv.config";
import { connectToDB } from "./db/db";

env();
connectToDB();
const app = express();

const PORT = 5200;

app.get("/", (_req, res) => {
    res.send("Hello from TypeScript + Node.js 👋");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
