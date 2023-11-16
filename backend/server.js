import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'

import userRoutes from "./routes/users.js"

const app = express()

app.use(express.json()); // falva isso para funcionar o req.body
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.use("/", userRoutes)

app.listen(8081, () => {
    console.log("Servidor rodando")
})