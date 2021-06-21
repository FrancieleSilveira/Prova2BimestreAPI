import express from "express"
import {router} from "./configs/routes"
import {mongoose} from "./configs/database"
import cors from 'cors'

const app = express()
const db = mongoose

app.use(cors()) //Adiciona o acesso para qualquer lugar
app.use(express.json())
app.use(router)



app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})