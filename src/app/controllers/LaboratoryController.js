import LaboratoryService from '../services/LaboratoryService';

class LaboratoryController
{
    async createLaboratory(req, res)
    {
        const { statusCode, response, message, valid } = await LaboratoryService.createLaboratoryService(req.body);

        return res.status(statusCode).json({ status: valid, response, message });
    }

    async updateLaboratory(req, res)
    {
        const { id_laboratory } = req.params;

        if (id_laboratory === '') {
            return res.status(400).json({ status: false, response: 'ID Laboratório à ser excluído não informado.' });
        }

        const response = await LaboratoryService.updateLaboratoryService({ id_laboratory, data: req.body });

        if (response.status) {
            return res.status(200).json({ status: true, response });
        }

        return res.status(400).json({ status: false, response: response.message });
    }

    async listLaboratorys(req, res)
    {
        const response = await LaboratoryService.listLaboratorysActiveService();

        return res.status(200).json({ status: true, response });
    }

    async deleteLaboratory(req, res)
    {
        const { id_laboratory } = req.params;

        if (id_laboratory === '') {
            return res.status(400).json({ status: false, response: 'ID Laboratório à ser excluído não informado.' });
        }

        const response = await LaboratoryService.deleteLaboratoryService(id_laboratory);

        if (response.status) {
            return res.status(204).json();
        }

        return res.status(400).json({ status: false, response: response.message });
    }
}

export default new LaboratoryController();