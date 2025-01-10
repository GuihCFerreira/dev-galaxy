import express, { Express } from "express";
import { connectToDatabase } from "./database";

const app: Express = express();

const port: string = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectToDatabase();
});
