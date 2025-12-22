import express from "express";
import {
    createUserAnswer,
    getAllUserAnswers,
    getUserAnswerById,
    updateUserAnswer,
    deleteUserAnswer,
} from "../controllers/userAnswer.controller.js";

const router = express.Router();

router.post("/", createUserAnswer);
router.get("/", getAllUserAnswers);
router.get("/:id", getUserAnswerById);
router.put("/:id", updateUserAnswer);
router.delete("/:id", deleteUserAnswer);

export default router;
