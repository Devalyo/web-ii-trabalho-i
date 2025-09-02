
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

export function select(filter) {
    return [...db];

}

export function insert(user)
{
    console.log(user);
    let { id } = db.at(db.length - 1)
    return db.push(
        {   
            id:id,
            name:user.name,
            username:user.username,
            role:user.role,
            status: user.status,
            email:user.email,
            createdAt:Date.now()
        })
}
