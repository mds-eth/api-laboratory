import { Router } from 'express';

import middlewareJWT from './app/middlewares/middlewareJWT';
import middlewareApiSecret from './app/middlewares/middlewareApiSecret';

import ExamController from './app/controllers/ExamController';
import SessionController from './app/controllers/SessionController';
import LaboratoryController from './app/controllers/LaboratoryController';
import AssociationController from './app/controllers/AssociationController';

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

        this.routes.post('/api/v1/association-exam-laboratory', AssociationController.createAssociatonExamLaboratory);
        this.routes.delete('/api/v1/exame/:id_exam/laboratory/:id_laboratory', AssociationController.disassociateExamLaboratory);


        this.routes.get('*', (req, res) =>
        {
            return res.status(404).json({ status: false, message: 'Route Not Found.' });
        });

        this.routes.post('*', (req, res) =>
        {
            return res.status(404).json({ status: false, message: 'Route Not Found.' });
        });

        this.routes.put('*', (req, res) =>
        {
            return res.status(404).json({ status: false, message: 'Route Not Found.' });
        });

        this.routes.delete('*', (req, res) =>
        {
            return res.status(404).json({ status: false, message: 'Route Not Found.' });
        });

    }
}

export default new Routes().routes;