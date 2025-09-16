
const db = [
    {
        id: 1,
        name: "Vinicius Fritzen Machado",
        username: "@vfmachado",
        role: "ADMIN",  // tipo
        status: "ACTIVE",
        email: "vinicius.machado@riogrande.ifrs.edu.br",
        createdAt: "2025-08-26"
    },
    {
        id: 2,
        name: "Theodoro Araujo Fritzen",
        username: "@theo",
        role: "ADMIN",  // tipo
        status: "DELETED",
        email: "vinicius.machado@riogrande.ifrs.edu.br",
        createdAt: "2025-08-26"
    },
    {
        id: 3,
        name: "David Maiato",
        username: "@david",
        role: "STUDENT",  // tipo
        status: "INACTIVE",
        email: "david.maioto@aluno.riogrande.ifrs.edu.br",
        createdAt: "2025-08-26"
    }
]

export function select() {
    return [...db];

}

export function selectById(id)
{
    const index = db.findIndex(obj => obj.id == id);

    console.log(db.at(index))
    return db.at(index);
}

export function insert(user)
{
    console.log(user);

    let { id } = db.at(db.length - 1)
    return db.push(
        {   
            id:id + 1,
            name:user.name,
            username:user.username,
            role:user.role,
            status: user.status,
            email:user.email,
            createdAt: new Date().toLocaleDateString()
        })
}

export function deleteWhereId(id)
{

    const index = db.findIndex(obj => obj.id == id);

    if(index === -1)
    {
        return 404;
    }

    return db.at(index).role != 'ADMIN'? db.splice(index, 1) : 403;
}

export function update(user, id)
{

    user.id = id;

    const index = db.findIndex(obj => obj,id == id);

    db[index] = user;

    console.log(db);


}