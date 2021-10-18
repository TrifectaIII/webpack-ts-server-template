import * as path from 'path';
import * as express from 'express';
import * as sqlite3 from 'sqlite3';

const port: number = 3000; //port for listening

const app: express.Express = express(); //create express app

const db: sqlite3.Database = new sqlite3.Database(':memory:'); //create in-memory db

//setup db
db.serialize(() => {

    //create table
    db.run(`CREATE TABLE users (
        user_id INTEGER PRIMARY KEY,
        name TEXT NOT NULL
    )`);

    //fill table with data
    const statement: sqlite3.Statement = db.prepare(`INSERT INTO users (name) VALUES (?)`);
    const names: string[] = ['Mark', 'Stephanie', 'Julia'];
    for (let i=0; i<names.length; i++) {
        statement.run(names[i]);
    }
    statement.finalize();

    //retrieve data
    db.all(`SELECT user_id, name FROM users`, (err, rows) => {
        // console.log(rows);
    });
    
});

//basic get route
app.get('/getreq', (req, res) => {
    res.send('Hello!');
});

// serve static files from build folder
app.use('/', express.static(path.resolve('./build')));

//listen at port
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));