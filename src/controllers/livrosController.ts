import {Request,Response} from "express"
import LivroSchema from "../models/LivroSchema"

class LivroController{

async cadastrar(request:Request,response:Response){
    const novoLivro = await LivroSchema.create(request.body)
    response.status(201).json({novoLivro})           
}

async buscar (request:Request, response:Response){
    const {isbn} = request.params
    const livros = await LivroSchema.find({isbn})
    response.status(200).json(livros)
}

async listar(request:Request, response:Response){
    response.status(200).json(await LivroSchema.find())
}

async alterar (request:Request, response:Response){
    const {isbn} = request.body
    response.status(200).json(await LivroSchema.findOneAndUpdate({isbn}, request.body))
}

async remover (request:Request, response:Response){
    const {isbn} = request.params
    const livro = await LivroSchema.findOneAndDelete({isbn})
    response.status(200).json(await LivroSchema.findOneAndDelete({livro}))
}


}

export {LivroController}