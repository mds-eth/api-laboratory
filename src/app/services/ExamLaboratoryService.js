import ExamModel from '../models/ExamsModel';
import ExamsLaboratorys from '../models/ExamsLaboratoryModel';

import { Op } from 'sequelize';

class ExamLaboratoryService
{
    async getListLaboratorysExamService(examName)
    {
        const response = await ExamModel.findAll({
            where: { name: { [Op.like]: `%${examName}%` }, status: true },
            attributes: ['uuid', 'name', 'type', 'value'],
            include: [
                ExamsLaboratorys
            ]
        });

        if (response) {
            return {
                status: true,
                response
            }
        }

        return {
            status: false,
            response
        }
    }
}
export default new ExamLaboratoryService();