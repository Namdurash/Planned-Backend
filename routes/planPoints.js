import express from 'express';
import { planPointsCollection } from '../database/dbConnections.js';
import { userCreateParser } from '../userCreateParser.js';
const urlencodedParser = express.urlencoded({extended: false}); // This function for retrieve request body

const planPointsRouter = express.Router();

planPointsRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

planPointsRouter.get('/', async (req, res) => {
    const results = await planPointsCollection.find().toArray();

    res.send(results);
});

planPointsRouter.get('/:id', async (req, res) => {
    const results = await planPointsCollection.find().toArray();
    const userId = Number(req.params.id);

    const resultUser = results.filter(el => el.id === userId);
    res.send(resultUser);
});

planPointsRouter.post('/', urlencodedParser, async (req, res) => {
    const newUser = userCreateParser(req.body);
    await planPointsCollection.insertOne(newUser);
    const results = await planPointsCollection.find().toArray();

    res.send(results);
});

export {planPointsRouter};