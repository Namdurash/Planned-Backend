import 'dotenv/config';
import { MongoClient } from 'mongodb'

const url = 'mongodb://127.0.0.1:27017/';
const mongoClient = new MongoClient(url);

const runClient = async () => {
    try {
        await mongoClient.connect();
        console.log("Подключение установлено");
    } catch (err) {
        console.log(err);
    }
}

const closeClient = async () => {
    try {
        await mongoClient.close();
    } catch (err) {
        console.log('Close mongo error', err);
    }
}

export { runClient, closeClient };