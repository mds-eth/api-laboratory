import express from 'express';

import cors from 'cors';

import routes from './routes';

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