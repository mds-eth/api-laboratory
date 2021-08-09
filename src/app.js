import express from 'express';

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
        this.createRoutes();
    }

    middlewares()
    {
        this.server.use(express.json());
        this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    }

    createRoutes()
    {
        this.server.use(routes);
    }
}

export default new App().server;