import express from "express";
import {
    createTimer,
    getTimer
} from "../controllers/timer.controller.js";

const router = express.Router();

router.post("/", createTimer);
router.get("/", getTimer);

export default router;