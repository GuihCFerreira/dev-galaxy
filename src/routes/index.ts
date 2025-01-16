import { Router } from "express";
import { planetRouter } from "./planet-route";
import { spaceshipRouter } from "./spaceship-route";
import { starsystemRouter } from "./starsystem-route";
import { characterRouter } from "./character-route";
import { userRouter } from "./user-route";
import { authMiddleware } from "../middleware/auth-midlleware";

const router = Router();

router.use("/planets", authMiddleware, planetRouter);
router.use("/spaceships", authMiddleware, spaceshipRouter);
router.use("/star-systems", authMiddleware, starsystemRouter);
router.use("/characters", authMiddleware, characterRouter);
router.use("/user", userRouter);

export { router };
