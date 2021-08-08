import ExamService from '../services/ExamService';

class ExamController
{
    async createExam(req, res)
    {
        const { statusCode, response, message, valid } = await ExamService.createExamService(req.body);

        return res.status(statusCode).json({ status: valid, response, message });
    }

    async updateExam(req, res)
    {
        const { id_exam } = req.params;

        if (id_exam === '') {
            return res.status(400).json({ status: false, response: 'ID Exame à ser excluído não informado.' });
        }

        const response = await ExamService.updateExamService({ id_exam, data: req.body });

        if (response.status) {
            return res.status(200).json({ status: true, response });
        }

        return res.status(400).json({ status: false, response: response.message });
    }

    async activateExam(req, res)
    {
        const { id_exam } = req.params;

        if (id_exam === '') {
            return res.status(400).json({ status: false, response: 'ID Exame à ser excluído não informado.' });
        }

        const response = await ExamService.activateExamService(id_exam);

        console.log(response);
        if (response.status) {
            return res.status(200).json({ status: true, response: response.response });
        }

        return res.status(400).json({ status: false, response: response.message });
    }

    async listExams(req, res)
    {
        const response = await ExamService.listExamActiveService();

        return res.status(200).json({ status: true, response });
    }

    async listInactiveExams(req, res)
    {
        const response = await ExamService.listInactiveExamsService();

        return res.status(200).json({ status: true, response });
    }

    async deleteExam(req, res)
    {
        const { id_exam } = req.params;

        if (id_exam === '') {
            return res.status(400).json({ status: false, response: 'ID Exame à ser excluído não informado.' });
        }

        const response = await ExamService.deleteExamService(id_exam);

        if (response.status) {
            return res.status(204).json();
        }

        return res.status(400).json({ status: false, response: response.message });
    }
}

export default new ExamController();