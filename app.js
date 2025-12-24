import express from 'express';
import { sequelize } from "./config/db.js"
import cors from "cors"

import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
// app.use(checkApiToken)

import MainRouter from "./routes/index.js"
import checkApiToken from './middlewares/checkApiToken.js';

app.use("/api", MainRouter)

const PORT = process.env.PORT || 3051

async function start() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true })
        console.log("connected to database")
        app.listen(PORT, () => {
            console.log(`Server started successfully, on port ${PORT}`)
        })
    } catch(err) {
        console.log(err)
    }
}

start()