import UserAnswer from "../models/userAnswer.model.js"

export const createUserAnswer = async (req, res) => {
    try {
        const { user_id, question_id, option_id } = req.body

        if (!user_id || !question_id || !option_id) {
            return res.status(400).json({
                message: "user_id, question_id, option_id majburiy",
            })
        }

        const answer = await UserAnswer.create({
            user_id,
            question_id,
            option_id,
        })

        res.status(201).json(answer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllUserAnswers = async (req, res) => {
    try {
        const answers = await UserAnswer.findAll()
        res.json(answers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getUserAnswerById = async (req, res) => {
    try {
        const answer = await UserAnswer.findByPk(req.params.id)

        if (!answer) {
            return res.status(404).json({ message: "Topilmadi" })
        }

        res.json(answer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateUserAnswer = async (req, res) => {
    try {
        const { user_id, question_id, option_id } = req.body
        const answer = await UserAnswer.findByPk(req.params.id)

        if (!answer) {
            return res.status(404).json({ message: "Topilmadi" })
        }

        await answer.update({ user_id, question_id, option_id })

        res.json({
            message: "Yangilandi",
            answer,
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteUserAnswer = async (req, res) => {
    try {
        const answer = await UserAnswer.findByPk(req.params.id)

        if (!answer) {
            return res.status(404).json({ message: "Topilmadi" })
        }

        await answer.destroy()
        res.json({ message: "O‘chirildi" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
