import { deleteWhereId, select, insert, selectById, update} from "../config/db.js"

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

export function formularioEdicao(req, res)
{
    let id = req.params.id;
    let user = selectById(id);

    res.render('user-edit', { user });
}



export function deletarUsuario(req, res)
{
    let id = req.params.id;
    const status = deleteWhereId(id);

    if(status === 404)
    {
        res.status(status).json('NOT FOUND');
    }
    if(status === 403)
    {
        res.status(status).json('FORBIDDEN');
    }

    res.redirect('/users/lista');

}


export function editarUsuario(req, res)
{
    let id = req.params.id;
    let user = req.body;
    const status = update(user, id);

    res.redirect('/users/lista');

}


