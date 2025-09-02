import { select } from "../config/db.js"
import { insert } from "../config/db.js"

// UTILIZANDO UM CONTROLLER SEM CLASSES
export function mostraListaUsuarios(req, res) {
    const dados = select();
    res.render('users-lista', { dados })
}

export function formularioUsuario(req, res){ 
    res.render('user-form', null);
}

export function criarUsuario(req, res)
{
    let user = req.body;
    insert(user);
    console.log(select());
    res.redirect('/users/lista');
}

