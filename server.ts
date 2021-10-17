import * as path from 'path';
import * as express from 'express';

const app = express(); //create express app
const port: number = 3000;

// serve static files from build folder
app.use('/', express.static(path.resolve('./build')));

//listen at port
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});