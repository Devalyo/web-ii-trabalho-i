import Database from 'better-sqlite3'

const db = new Database('my_database.db', { verbose: console.log });


const selectFromDb = () =>
{
    const stm = db.prepare('SELECT * FROM users');
    const result = stm.all();
    console.log({result});
}

const selectFromEmail = (email) =>
{
    const stm = db.prepare('select * from users where email = ?');
    const result = stm.get(email)

    console.log({result});
}


selectFromDb();

selectFromEmail('dabuel@gmail.com');