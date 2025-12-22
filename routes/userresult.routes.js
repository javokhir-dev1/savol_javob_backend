import express from "express";
import {
    createUserResult,
    getUsersResult,
    getUserResultById
} from "../controllers/userresult.controller.js";

const router = express.Router();

router.post("/", createUserResult);
router.get("/", getUsersResult);
router.get("/:id", getUserResultById);

export default router;