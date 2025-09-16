import { Router } from "express"
import { deletarUsuario, formularioEdicao, mostraListaUsuarios , editarUsuario} from "../controller/users-controller.js";
import { formularioUsuario } from "../controller/users-controller.js";
import { criarUsuario } from "../controller/users-controller.js"

const usersRouter = Router();

const respostaPadrao = (req, res) => { res.send("FUNCIONA") };

usersRouter.get('/lista',  mostraListaUsuarios);

usersRouter.get('/criar',  formularioUsuario);
usersRouter.post('/criar', criarUsuario);

usersRouter.get('/editar/:id',   formularioEdicao);
usersRouter.post('/editar/:id',  editarUsuario);

usersRouter.post('/deletar/:id', deletarUsuario);

export  { usersRouter }