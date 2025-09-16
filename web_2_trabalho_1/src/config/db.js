
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
    },
    {
        id: 4,
        name: "Dabuel Clava",
        username: "@devalyo",
        role: "STUDENT",  // tipo
        status: "ACTIVE",
        email: "daniel.machado@gmail.com",
        createdAt: "2025-08-26"
    },
    {
        id: 5,
        name: "Dabuel Clava",
        username: "@devalyo",
        role: "STUDENT",  // tipo
        status: "ACTIVE",
        email: "daniel.machado@gmail.com",
        createdAt: "2025-08-26"
    },
    {
        id: 6,
        name: "Dabuel Clava",
        username: "@devalyo",
        role: "STUDENT",  // tipo
        status: "ACTIVE",
        email: "daniel.machado@gmail.com",
        createdAt: "2025-08-26"
    },
    {
        id: 7,
        name: "Dabuel Clava",
        username: "@devalyo",
        role: "STUDENT",  // tipo
        status: "ACTIVE",
        email: "daniel.machado@gmail.com",
        createdAt: "2025-08-26"
    },
    {
        id: 8,
        name: "Dabuel Clava",
        username: "@devalyo",
        role: "STUDENT",  // tipo
        status: "ACTIVE",
        email: "daniel.machado@gmail.com",
        createdAt: "2025-08-26"
    },
    {
        id: 9,
        name: "Dabuel Clava",
        username: "@devalyo",
        role: "STUDENT",  // tipo
        status: "ACTIVE",
        email: "daniel.machado@gmail.com",
        createdAt: "2025-08-26"
    },
    {
        id: 10,
        name: "Dabuel Clava",
        username: "@devalyo",
        role: "STUDENT",  // tipo
        status: "ACTIVE",
        email: "daniel.machado@gmail.com",
        createdAt: "2025-08-26"
    },
    {
        id: 11,
        name: "Dabuel Clava",
        username: "@devalyo",
        role: "STUDENT",  // tipo
        status: "ACTIVE",
        email: "daniel.machado@gmail.com",
        createdAt: "2025-08-26"
    }
]

export function select(page) {''

    return [...db.slice(page * 5, (page * 5) + 5)];

}

export function count()
{
    return {totalPages: Math.ceil(db.length / 5), totalUsers: db.length };
}

export function selectById(id)
{
    const index = db.findIndex(obj => obj.id == id);

    console.log(db.at(index))
    return db.at(index);
}

export function selectAll()
{
    return [...db]
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