import { v4 as uuidv4 } from 'uuid';

import ExamModel from '../models/ExamsModel';
import ExamsLaboratorys from '../models/ExamsLaboratoryModel';

class ExamService
{
    async createExamService(data)
    {
        try {

            const uuid = uuidv4();

            const { name, type, value } = data;

            if (name === '' || type === '' || value === '') {
                return {
                    statusCode: 400,
                    valid: false,
                    response: false,
                    message: 'Todos os campos são obrigatórios.'
                }
            }

            if (typeof name !== 'string' || typeof type !== 'string') {
                return {
                    statusCode: 400,
                    valid: false,
                    response: false,
                    message: 'Campos name ou type inválidos.'
                }
            }

            if (typeof value !== 'number') {
                return {
                    statusCode: 400,
                    valid: false,
                    response: false,
                    message: 'Campo valor enviado incorretamente.'
                }
            }

            const examResponse = await ExamModel.create({ uuid, name, type, value });

            if (examResponse) {
                return {
                    statusCode: 201,
                    valid: true,
                    response: examResponse,
                    message: 'Exame cadastrado com sucesso'
                };
            }

            return {
                statusCode: 400,
                valid: false,
                response: examResponse,
                message: 'Ocorreu algum erro ao realizar o cadastro de novo Exame.'
            };

        } catch (error) {
            return {
                statusCode: 400,
                valid: false,
                response: [],
                message: 'Ocorreu algum erro ao realizar o cadastro de novo Exame.'
            };
        }
    }

    async listExamActiveService()
    {
        const exams = await ExamModel.findAll({
            where: { status: true },
            attributes: ['id', 'uuid', 'name', 'type', 'value']
        });

        return exams;
    }

    async listInactiveExamsService()
    {
        const exams = await ExamModel.findAll({
            where: { status: false },
            attributes: ['id', 'uuid', 'name', 'type', 'value']
        });

        return exams;
    }

    async updateExamService(params)
    {

        try {
            const { id_exam, data } = params;

            const { name, type, value } = data;

            if (name === '' || type === '' || value === '') {
                return {
                    statusCode: 400,
                    valid: false,
                    response: false,
                    message: 'Todos os campos são obrigatórios.'
                }
            }

            if (typeof name !== 'string' || typeof type !== 'string') {
                return {
                    statusCode: 400,
                    valid: false,
                    response: false,
                    message: 'Campos name ou type inválidos.'
                }
            }

            if (typeof value !== 'number') {
                return {
                    statusCode: 400,
                    valid: false,
                    response: false,
                    message: 'Campo valor enviado incorretamente.'
                }
            }

            const exam = await ExamModel.findOne({
                where: { id: id_exam, status: true }
            });

            if (exam) {
                const response = await ExamModel.update(
                    { name, type, value },
                    { where: { id: id_exam } }
                );

                if (response) {
                    return {
                        status: true,
                        message: 'Exame atualizado com sucesso.'
                    }
                }

                return {
                    status: false,
                    message: 'Ocorreu algum erro ao atualizar Exame.'
                }
            }

            return {
                status: false,
                message: 'Exame informado não localizado.'
            }
        } catch (error) {
            return {
                status: false,
                message: 'Erro ao atualizar exame.'
            }
        }
    }

    async deleteExamService(id)
    {
        const exam = await ExamModel.findOne({
            where: { id, status: true }
        });

        if (exam) {

            const existsAssociation = await ExamsLaboratorys.findOne({
                where: { fk_id_exam: id }
            });

            if (existsAssociation) {
                return {
                    status: false,
                    message: 'Você não pode remover este exame pois ele possui vinculação com um ou mais laboratórios. Favor verificar.'
                }
            }
            const response = await ExamModel.update(
                { status: false },
                { where: { id } }
            );

            if (response) {
                return {
                    status: true
                }
            }

            return {
                status: false,
                message: 'Ocorreu algum erro ao realizar a exclusão do exame.'
            }
        }

        return {
            status: false,
            message: 'exame informado não localizado.'
        }
    }

    async activateExamService(id)
    {
        const exam = await ExamModel.findOne({
            where: { id, status: false }
        });

        if (exam) {
            const response = await ExamModel.update(
                { status: true },
                { where: { id } }
            );

            if (response) {
                return {
                    status: true,
                    response: 'Exame ativo com sucesso.'
                }
            }

            return {
                status: false,
                message: 'Ocorreu algum erro ao ativar exame.'
            }
        }

        return {
            status: false,
            message: 'Exame está ativo ou não foi localizado.'
        }
    }
}

export default new ExamService();

