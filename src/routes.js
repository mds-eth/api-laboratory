import { Router } from 'express';

import middlewareJWT from './app/middlewares/middlewareJWT';
import middlewareApiSecret from './app/middlewares/middlewareApiSecret';

import ExamController from './app/controllers/ExamController';
import SessionController from './app/controllers/SessionController';
import LaboratoryController from './app/controllers/LaboratoryController';

class Routes
{
    constructor()
    {
        this.routes = Router();
        this.createRoutes();
    }

    createRoutes()
    {
        this.routes.post('/api/v1/create-session', middlewareApiSecret, SessionController.createSession);

        this.routes.use(middlewareJWT);

        this.routes.get('/api/v1/exam', ExamController.listExams);
        this.routes.post('/api/v1/exam', ExamController.createExam);
        this.routes.put('/api/v1/exam/:id_exam', ExamController.updateExam);
        this.routes.delete('/api/v1/exam/:id_exam', ExamController.deleteExam);

        this.routes.get('/api/v1/laboratory', LaboratoryController.listLaboratorys);
        this.routes.post('/api/v1/laboratory', LaboratoryController.createLaboratory);
        this.routes.put('/api/v1/laboratory/:id_laboratory', LaboratoryController.updateLaboratory);
        this.routes.delete('/api/v1/laboratory/:id_laboratory', LaboratoryController.deleteLaboratory);

    }
}

export default new Routes().routes;