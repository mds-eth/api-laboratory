import { v4 as uuidv4 } from 'uuid';

import ExamModel from '../models/ExamsModel';
import LaboratoryModel from '../models/LaboratorysModel';
import ExamsLaboratorys from '../models/ExamsLaboratoryModel';

class AssociationService
{
    async createAssociationExamLaboratoryService(data)
    {
        try {

            const { id_exam, ids_laboratory } = data;

            if (id_exam === '' || ids_laboratory.length === 0) {
                return {
                    statusCode: 400,
                    valid: false,
                    message: 'Paramêtros id_exam e id_laboratory obrigatórios não enviados.',
                }
            }

            const existsExam = await ExamModel.findOne({
                where: { id: id_exam, status: true }
            });

            if (!existsExam) {
                return {
                    statusCode: 400,
                    valid: false,
                    message: 'Exame não existente, favor verificar id enviado.',
                }
            }

            return await this.saveAssociation(id_exam, ids_laboratory, existsExam.name)

        } catch (error) {
            return {
                statusCode: 400,
                valid: false,
                message: 'Ocorreu algum erro ao realizar associação de exame ao laboratório.',
            }
        }
    }

    async saveAssociation(id_exam, ids_laboratory, examName)
    {
        let idsNotLab = '';
        let idsLab = '';
        let loopExists = 0;
        let loopNotExists = 0;

        for (var i in ids_laboratory) {
            const idLaboratory = ids_laboratory[i];

            const existsLab = await LaboratoryModel.findOne({
                where: { id: idLaboratory, status: true }
            });

            if (!existsLab) {
                loopNotExists++;
                idsNotLab += `${idLaboratory},`;

                continue;
            }

            const uuid = uuidv4();

            const existsAssociation = await ExamsLaboratorys.findOne({
                where: { fk_id_exam: id_exam, fk_id_laboratory: idLaboratory }
            });

            if (existsAssociation) {
                continue;
            }

            await ExamsLaboratorys.create({ uuid, fk_id_exam: id_exam, fk_id_laboratory: idLaboratory });

            loopExists++;
            idsLab += `${idLaboratory},`;
        }

        if (loopNotExists === ids_laboratory.length) {
            return {
                statusCode: 400,
                valid: false,
                message: 'Ids laboratórios enviados não existem, favor verificar.',
            }
        }

        return {
            statusCode: 200,
            valid: true,
            message: `Exame: ${examName}, foi vinculado aos laboratórios com ids: ${idsLab.slice(0, -1)}. Ids laboratórios: ${idsNotLab.slice(0, -1)} não foram localizados.`,
        }
    }

    async disassociateExamLaboratoryService(id_exam, id_laboratory)
    {
        try {

            const existsExam = await ExamModel.findOne({
                where: { id: id_exam, status: true }
            });

            if (!existsExam) {
                return {
                    statusCode: 400,
                    valid: false,
                    message: 'Exame não existente, favor verificar id enviado.',
                }
            }

            const existsLab = await LaboratoryModel.findOne({
                where: { id: id_laboratory, status: true }
            });

            if (!existsLab) {
                return {
                    statusCode: 400,
                    valid: false,
                    message: 'Laboratório não existente, favor verificar id enviado.',
                }
            }

            const existsAssociation = await ExamsLaboratorys.findOne({
                where: { fk_id_exam: id_exam, fk_id_laboratory: id_laboratory }
            });

            if (!existsAssociation) {
                return {
                    statusCode: 400,
                    valid: false,
                    message: 'Não existe vinculação de exames a este laboratório.',
                }
            }

            await ExamsLaboratorys.destroy({
                where: { fk_id_exam: id_exam, fk_id_laboratory: id_laboratory }
            });

            return {
                statusCode: 200,
                valid: false,
                message: 'Desassociação realizada com sucesso.',
            }
        } catch (error) {
            return {
                statusCode: 400,
                valid: false,
                message: 'Ocorreu algum erro ao realizar a desassociação de exame e laboratório.',
            }
        }
    }
}

export default new AssociationService();