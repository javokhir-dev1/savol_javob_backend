import UserResult from "../models/userresult.model.js";

export const createUserResult = async (req, res) => {
    try {
        const { user_id } = req.body
        const userResult = await UserResult.create({ user_id })
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
        res.json(userResult)
    } catch (err) {
        console.log(err)
    }
} 