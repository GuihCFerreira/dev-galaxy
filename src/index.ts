import express, { Express } from "express";
import { connectToDatabase } from "./database";
import { config } from "dotenv";
import cors from "cors";
import { router } from "./routes";

config();

const app: Express = express();

app.use(express.json());
app.use(cors());

const port: string = process.env.PORT || "3000";

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectToDatabase();
});
