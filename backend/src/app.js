import express from "express"
import aiRouter from "./routes/ai.routes.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/ai", aiRouter);

export default app;