import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) =>
    response.json({ messager: 'Hello,world!' }),
);

export default routes;
