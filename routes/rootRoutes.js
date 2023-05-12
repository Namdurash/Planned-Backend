import { userRouter, planPointsRouter } from './index.js';

export const routes = (app) => {
    app.use('/users', userRouter);
    app.use('/planpoints', planPointsRouter);
}