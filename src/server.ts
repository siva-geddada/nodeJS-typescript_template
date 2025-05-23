import cors from "cors";
import express from "express";
import { connectToDB } from "./db/db";
import { env } from "./config/dotenv.config";
import { router } from "./routes/app.routes";

env();
connectToDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(`${process.env.apiPrefix}`,router);

const PORT = 5200;
app.get("/", (_req, res) => {
    res.send("Hello from TypeScript + Node.js 👋");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
