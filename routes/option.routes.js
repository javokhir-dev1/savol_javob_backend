import express from "express";
import {
    createOption,
    getAllOptions,
    getOptionById,
    updateOption,
    deleteOption,
    getOptionsByQuestion,
} from "../controllers/option.controller.js";

const router = express.Router();

router.post("/", createOption);
router.get("/", getAllOptions);
router.get("/question/:id", getOptionsByQuestion)
router.get("/:id", getOptionById);
router.put("/:id", updateOption);
router.delete("/:id", deleteOption);

export default router;
