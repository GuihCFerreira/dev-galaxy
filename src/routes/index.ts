import { Router } from "express";
import { planetRouter } from "./planet-route";

const router = Router();

router.use("/planets", planetRouter);

export { router };
