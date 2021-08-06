import AssociationService from '../services/AssociationService';

class AssociationController
{
    async createAssociatonExamLaboratory(req, res)
    {
        const { statusCode, message, valid } = await AssociationService.createAssociationExamLaboratoryService(req.body);

        return res.status(statusCode).json({ status: valid, message });
    }

    async disassociateExamLaboratory(req, res)
    {
        const { id_exam, id_laboratory } = req.params;

        if (id_exam === '' || id_laboratory === '') {
            return res.status(400).json({ status: false, message: 'Parâmetros obrigatórios não enviados.' });
        }

        const { statusCode, message, valid } = await AssociationService.disassociateExamLaboratoryService(id_exam, id_laboratory);

        return res.status(statusCode).json({ status: valid, message });
    }
}

export default new AssociationController();