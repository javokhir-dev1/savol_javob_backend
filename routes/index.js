import { Router } from 'express'
const router = Router()

router.get("/time", (req, res) => {
    try {

        const now = new Date()

        const day = String(now.getDate()).padStart(2, "0")
        const month = String(now.getMonth() + 1).padStart(2, "0")
        const year = now.getFullYear()

        const formattedDate = `${day}:${month}:${year}`
        res.json({
            date: formattedDate
        })
    } catch(err) {
        console.log(err)
    }
})

import UserRouter from "./user.routes.js"
import UserAnswerRouter from "./userAnwer.routes.js"
import QuestionRouter from "./question.routes.js"
import OptionRouter from "./option.routes.js"
import TimerRouter from "./timer.routes.js"
import UserResultRouter from "./userresult.routes.js"

router.use("/users", UserRouter)
router.use("/useranswers", UserAnswerRouter)
router.use("/questions", QuestionRouter)
router.use("/options", OptionRouter)
router.use("/timer", TimerRouter)
router.use("/userresults", UserResultRouter)

export default router