import ExamModel from '../models/ExamsModel';
import LaboratoryModel from '../models/LaboratorysModel';

import { Op } from 'sequelize';

class ExamLaboratoryService
{
    async getListLaboratorysExamService(examName)
    {
        const response = await ExamModel.findAll({
            where: { name: { [Op.like]: `%${examName}%` }, status: true },
            attributes: ['uuid', 'name', 'type', 'value'],
            include: [
                {
                    model: LaboratoryModel,
                    as: 'laboratorys',
                    through: { attributes: [] },
                    attributes: ['uuid', 'name', 'address', 'opening_time', 'closing_time', 'phone']
                }
            ]
        });

        if (response.length > 0) {
            return {
                status: true,
                response: response.filter(r => r.laboratorys.length > 0),
                examName
            }
        }

        return {
            status: false,
            examName,
            response: 'Não foram localizados exames com o valor informado.'
        }
    }
}
export default new ExamLaboratoryService();