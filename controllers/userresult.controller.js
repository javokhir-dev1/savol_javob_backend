import { where } from "sequelize";
import UserResult from "../models/userresult.model.js";

export const createUserResult = async (req, res) => {
    try {
        const { user_id, questions, correctAnswers, date } = req.body
        const userResult = await UserResult.create({ user_id, questions, correctAnswers, date })
        res.json(userResult)
    } catch (err) {
        console.log(err)
    }
}

export const getUsersResult = async (req, res) => {
    try {
        const userResults = await UserResult.findAll()

        res.json(userResults)
    } catch (err) {
        console.log(err)
    }
}

export const getUserResultById = async (req, res) => {
    try {
        const { id } = req.params
        const userResult = await UserResult.findOne({ where: { user_id: id } })

        if (!userResult) {
            return res.json({ message: "userresult not found " })
        }
        res.json(userResult)
    } catch (err) {
        console.log(err)
    }
}

export const getUserDataByDate = async (req, res) => {
    try {
        const { date } = req.body
        const isUserExists = await UserResult.findOne({ where: { date } })
        if (isUserExists) {
            return res.json({ exists: true })
        }
        res.json({ exists: false })
    } catch (err) {
        console.log(err)
    }
}