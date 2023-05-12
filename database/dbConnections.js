import { defineEnvironment } from '../utils/defineEnvironment.js';
import {port} from './port.js';

const plannedDB = defineEnvironment(port);
const usersCollection = plannedDB.collection('users');
const planPointsCollection = plannedDB.collection('planPoints');

export { usersCollection, planPointsCollection };