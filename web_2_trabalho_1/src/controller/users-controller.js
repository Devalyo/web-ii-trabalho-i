import { deleteWhereId, select, insert, selectById, update, count, selectAll} from "../config/db.js"
import { Parser } from "json2csv";

// UTILIZANDO UM CONTROLLER SEM CLASSES
export function mostraListaUsuarios(req, res) {
    const page = req.query.page?? 1;
    const dados = select(page - 1);
    const {totalPages, totalUsers} = count();

    res.render('users-lista', { dados:dados, page:page, totalPages:totalPages, totalUsers:totalUsers})
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

export function exportarCSV(req, res) {
    const dados = selectAll();
    
    const parser = new Parser();
    const csv = parser.parse(dados);

    res.header("Content-Type", "text/csv");
    res.attachment('users.csv');

    return res.send(csv);

}



