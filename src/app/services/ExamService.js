import { v4 as uuidv4 } from 'uuid';

import ExamModel from '../models/ExamsModel';

class ExamService
{
    async createExamService(data)
    {
        try {

            const uuid = uuidv4();

            const { name, type } = data;

            const exame = await ExamModel.create({ uuid, name, type });

            if (exame) {
                return {
                    statusCode: 201,
                    valid: true,
                    response: exame,
                    message: 'Exame cadastrado com sucesso'
                };
            }

            return {
                statusCode: 400,
                valid: false,
                response: exame,
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
            attributes: ['id', 'uuid', 'name', 'type']
        });

        return exams;
    }

    async updateExamService(params)
    {

        try {
            const { id_exam, data } = params;

            const { name, type } = data;

            const exam = await ExamModel.findOne({
                where: { id: id_exam, status: true }
            });

            if (exam) {
                const response = await ExamModel.update(
                    { name, type },
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
            console.log(error);
        }
    }

    async deleteExamService(id)
    {
        const exam = await ExamModel.findOne({
            where: { id, status: true }
        });

        if (exam) {
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
}

export default new ExamService();

