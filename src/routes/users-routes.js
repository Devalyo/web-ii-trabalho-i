import { Router } from "express"
import { mostraListaUsuarios } from "../controller/users-controller.js";
import { formularioUsuario } from "../controller/users-controller.js";
import { criarUsuario } from "../controller/users-controller.js"

const usersRouter = Router();

const respostaPadrao = (req, res) => { res.send("FUNCIONA") };

usersRouter.get('/lista',  mostraListaUsuarios);

usersRouter.get('/criar',  formularioUsuario);
usersRouter.post('/criar', criarUsuario);

usersRouter.get('/edit',   respostaPadrao);
usersRouter.post('/edit',  respostaPadrao);

usersRouter.get('/delete', respostaPadrao);

export  { usersRouter }