import express from 'express';

import cors from 'cors';

import routes from './routes';

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

import './database/mysql';

class App
{
    constructor()
    {
        this.server = express();

        this.middlewares();
        this.configCors();
        this.createRoutes();
    }

    middlewares()
    {
        this.server.use(express.json());
        this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    }

    configCors()
    {
        const whitelist = ['http://localhost:3000'];

        this.server.use(cors(whitelist));
    }

    createRoutes()
    {
        this.server.use(routes);
    }
}

export default new App().server;