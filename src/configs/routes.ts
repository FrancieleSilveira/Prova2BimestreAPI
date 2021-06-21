import {Router} from "express"
import {LivroController} from "../controllers/livrosController"

const router = Router()

const livroController = new LivroController()

router.post("/livro/cadastrar", livroController.cadastrar)
router.get("/livro/buscar/:isbn", livroController.buscar)
router.get("/livro/listar", livroController.listar)
router.put("/livro/editar/", livroController.alterar)
router.delete("/livro/deletar/:isbn", livroController.remover)

 
export{router}