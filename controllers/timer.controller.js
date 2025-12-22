import Timer from "../models/timer.model.js"

export const createTimer = async (req, res) => {
    try {
        const { time } = req.body
        const timer = await Timer.findOne({ where: { id: 1 } })

        if (!timer) {
            await Timer.create({ id: 1, time })
        } else {
            await timer.update({ time })
        }

        res.json({ message: "timer created successfully" })

    } catch (err) {
        console.log(err)
    }
}

export const getTimer = async (req, res) => {
    try {
        const timer = await Timer.findOne({ where: { id: 1 } })
        res.json(timer)
    } catch (err) {
        console.log(err)
    }
}