import e from "express";
import Option from "../models/options.model.js";

export const createOption = async (req, res) => {
    try {
        const { question_id, option_text, is_correct } = req.body;

        if (!question_id || !option_text) {
            return res.status(400).json({
                message: "question_id va option_text majburiy",
            });
        }

        const option = await Option.create({
            question_id,
            option_text,
            is_correct: Boolean(is_correct),
        });

        res.status(201).json(option);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOptionsByQuestion = async (req, res) => {
    try {
        const { id } = req.params
        const options = await Option.findAll({ where: { question_id: id } })
        res.json(options)
    } catch (err) {
        console.log(err)
    }
}

export const getAllOptions = async (req, res) => {
    try {
        const options = await Option.findAll();
        res.json(options);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getOptionById = async (req, res) => {
    try {
        const option = await Option.findByPk(req.params.id);

        if (!option) {
            return res.status(404).json({ message: "Variant topilmadi" });
        }

        res.json(option);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateOption = async (req, res) => {
    try {
        const { question_id, option_text, is_correct } = req.body;
        const option = await Option.findByPk(req.params.id);

        if (!option) {
            return res.status(404).json({ message: "Variant topilmadi" });
        }

        await option.update({
            question_id,
            option_text,
            is_correct: Boolean(is_correct),
        });

        res.json({
            message: "Variant yangilandi",
            option,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteOption = async (req, res) => {
    try {
        const option = await Option.findByPk(req.params.id);

        if (!option) {
            return res.status(404).json({ message: "Variant topilmadi" });
        }

        await option.destroy();
        res.json({ message: "Variant o‘chirildi" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
