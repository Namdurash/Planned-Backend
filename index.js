import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { runClient, closeClient } from './database/mongo.js';
import { port } from './database/port.js';
import { routes } from './routes/rootRoutes.js'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const insertUser = async (req, res, next) => {
//     const newUser = userCreateParser(req.body);
//     try {
//         await usersCollection.insertOne(newUser);
//         next();
//     } catch (err) {
//         return err;
//     }
// }

// app.use(express.static(`${__dirname}/public`));

// mongoose.connect('mongodb://127.0.0.1:27017/testPlannedDB', {
//     useNewUrlParser: true
// })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

(() => {
    try {
        console.log("Сервер ожидает подключения...");
        // await runClient();
        mongoose.connect('mongodb://127.0.0.1/testPlannedDB', {
            useNewUrlParser: true
        })
        app.listen(port);
    } catch (err) {
        return console.log(err);
    }
})();

app.get('/', (req, res) => {
    req.req
    res.send('Test world')
})

// IDK what it does
app.get('/close', async (req, res) => {
    await closeClient();
});
