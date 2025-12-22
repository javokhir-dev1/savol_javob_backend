import Question from "../models/question.model.js";

export const createQuestion = async (req, res) => {
    try {
        const { body } = req.body;

        if (!body) {
            return res.status(400).json({
                message: "body majburiy",
            });
        }

        const question = await Question.create({ body });
        res.status(201).json(question);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll();
        res.json(questions);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getQuestionById = async (req, res) => {
    try {
        const question = await Question.findByPk(req.params.id);

        if (!question) {
            return res.status(404).json({ message: "Savol topilmadi" });
        }

        res.json(question);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateQuestion = async (req, res) => {
    try {
        const { body } = req.body;
        const question = await Question.findByPk(req.params.id);

        if (!question) {
            return res.status(404).json({ message: "Savol topilmadi" });
        }

        await question.update({ body });

        res.json({
            message: "Savol yangilandi",
            question,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteQuestion = async (req, res) => {
    try {
        const question = await Question.findByPk(req.params.id);

        if (!question) {
            return res.status(404).json({ message: "Savol topilmadi" });
        }

        await question.destroy();

        res.json({ message: "Savol o‘chirildi" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
