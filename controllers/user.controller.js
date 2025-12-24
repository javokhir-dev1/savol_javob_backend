import User from "../models/user.model.js"

export const createUser = async (req, res) => {
    try {
        const { user_id, full_name } = req.body

        if (!user_id || !full_name) {
            return res.status(400).json({
                message: "user_id va full_name majburiy"
            })
        }

        const isUserExists = await User.findOne({ where: { user_id } })

        if (isUserExists) {
            return res.json({message: "User already exists"})
        }

        const newUser = await User.create({
            user_id,
            full_name
        })

        res.status(201).json(newUser)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getUserId = async (req, res) => {
    const { id } = req.params

    const user = await User.findOne({ where: { user_id: id } })
    res.json({ user_id: user.id })
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params

        const user = await User.findByPk(id)

        if (!user) {
            return res.status(404).json({
                message: "User topilmadi"
            })
        }

        res.json(user)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { user_id, full_name } = req.body

        const user = await User.findByPk(id)

        if (!user) {
            return res.status(404).json({
                message: "User topilmadi"
            })
        }

        await user.update({
            user_id,
            full_name
        })

        res.json({
            message: "User yangilandi",
            user
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        const user = await User.findByPk(id)

        if (!user) {
            return res.status(404).json({
                message: "User topilmadi"
            })
        }

        await user.destroy()

        res.json({
            message: "User o'chirildi"
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
