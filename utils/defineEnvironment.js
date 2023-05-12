import { MongoClient } from 'mongodb'

const url = 'mongodb://127.0.0.1:27017/';
const mongoClient = new MongoClient(url);

export const defineEnvironment = (port) => {
    if (port === process.env.DEVELOPMENT_PORT) {
        console.log('DEV');
        return mongoClient.db('developmentPlannedDB');
    }
    if (port === process.env.PRODUCTION_PORT) {
        console.log('PROD');
        return mongoClient.db('productionPlannedDB');
    }
    if (port === process.env.TEST_PORT) {
        console.log('TEST');
        return mongoClient.db('testPlannedDB');
    }
    return mongoClient.db('testPlannedDB');
}