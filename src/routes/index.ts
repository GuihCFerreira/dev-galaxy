import { Router } from "express";
import { planetRouter } from "./planet-route";
import { spaceshipRouter } from "./spaceship-route";
import { starsystemRouter } from "./starsystem-route";
import { characterRouter } from "./character-route";
import { userRouter } from "./user-route";

const router = Router();

router.use("/planets", planetRouter);
router.use("/spaceships", spaceshipRouter);
router.use("/star-systems", starsystemRouter);
router.use("/characters", characterRouter);
router.use("/user", userRouter);

export { router };
