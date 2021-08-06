import AssociationService from '../services/AssociationService';

class AssociationController
{
    async createAssociatonExamLaboratory(req, res)
    {
        const { statusCode, message, valid } = await AssociationService.createAssociationExamLaboratoryService(req.body);

        return res.status(statusCode).json({ status: valid, message });
    }
}

export default new AssociationController();