import { v4 as uuidv4 } from 'uuid';

import LaboratoryModel from '../models/LaboratorysModel';
import ExamsLaboratorys from '../models/ExamsLaboratoryModel';

class LaboratoryService
{
    async createLaboratoryService(data)
    {
        try {

            const uuid = uuidv4();

            const { name, address, opening_time, closing_time, phone } = data;

            if (name === '' || address === '' || opening_time === '' || closing_time === '' || phone === '') {
                return {
                    statusCode: 400,
                    valid: false,
                    response: false,
                    message: 'Todos os campos são de preenchimento obrigatório.'
                };
            }

            if (typeof name !== 'string' || typeof address !== 'string' || typeof opening_time !== 'string' || typeof closing_time !== 'string' || typeof phone !== 'string') {
                return {
                    statusCode: 400,
                    valid: false,
                    response: false,
                    message: 'Todos os campos são do tipo string.'
                };
            }

            const laboratory = await LaboratoryModel.create({ uuid, name, address, opening_time, closing_time, phone });

            if (laboratory) {
                return {
                    statusCode: 201,
                    valid: true,
                    response: laboratory,
                    message: 'Laboratório cadastrado com sucesso'
                };
            }

            return {
                statusCode: 400,
                valid: false,
                response: laboratory,
                message: 'Ocorreu algum erro ao realizar o cadastro de novo laboratório.'
            };

        } catch (error) {
            return {
                statusCode: 400,
                valid: false,
                response: [],
                message: 'Ocorreu algum erro ao realizar o cadastro de novo laboratório.'
            };
        }
    }

    async listLaboratorysActiveService()
    {
        const laboratorys = await LaboratoryModel.findAll({
            where: { status: true },
            attributes: ['id', 'uuid', 'name', 'address', 'opening_time', 'closing_time', 'phone']
        });

        return laboratorys;
    }

    async listInactiveLaboratorysService()
    {
        const laboratorys = await LaboratoryModel.findAll({
            where: { status: false },
            attributes: ['id', 'uuid', 'name', 'address', 'opening_time', 'closing_time', 'phone']
        });

        return laboratorys;
    }

    async deleteLaboratoryService(id)
    {
        const laboratory = await LaboratoryModel.findOne({
            where: { id, status: true }
        });

        if (laboratory) {

            const existsAssociation = await ExamsLaboratorys.findOne({
                where: { fk_id_laboratory: id }
            });

            if (existsAssociation) {
                return {
                    status: false,
                    message: 'Você não pode remover este laboratório pois ele possui vinculação com um ou mais exames. Favor verificar.'
                }
            }

            const response = await LaboratoryModel.update(
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
                message: 'Ocorreu algum erro ao realizar a exclusão do laboratório.'
            }
        }

        return {
            status: false,
            message: 'Laboratório informado não localizado.'
        }
    }

    async updateLaboratoryService(params)
    {

        try {
            const { id_laboratory, data } = params;

            const { name, address, opening_time, closing_time, phone } = data;

            if (name === '' || address === '' || opening_time === '' || closing_time === '' || phone === '') {
                return {
                    statusCode: 400,
                    valid: false,
                    response: false,
                    message: 'Todos os campos são de preenchimento obrigatório.'
                };
            }

            if (typeof name !== 'string' || typeof address !== 'string' || typeof opening_time !== 'string' || typeof closing_time !== 'string' || typeof phone !== 'string') {
                return {
                    statusCode: 400,
                    valid: false,
                    response: false,
                    message: 'Todos os campos são do tipo string.'
                };
            }

            const laboratory = await LaboratoryModel.findOne({
                where: { id: id_laboratory, status: true }
            });

            if (laboratory) {
                const response = await LaboratoryModel.update(
                    { name, address, opening_time, closing_time, phone },
                    { where: { id: id_laboratory } }
                );

                if (response) {
                    return {
                        status: true,
                        message: 'Laboratório atualizado com sucesso.'
                    }
                }

                return {
                    status: false,
                    message: 'Ocorreu algum erro ao atualizar laboratório.'
                }
            }

            return {
                status: false,
                message: 'Laboratório informado não localizado.'
            }
        } catch (error) {
            return {
                status: false,
                message: 'Erro ao atualizar laboratório.'
            }
        }
    }

    async activateLaboratoryService(id)
    {
        try {

            const laboratory = await LaboratoryModel.findOne({
                where: { id, status: false }
            });

            if (laboratory) {
                const response = await LaboratoryModel.update(
                    { status: true },
                    { where: { id } }
                );

                if (response) {
                    return {
                        status: true,
                        response: 'Laboratório ativado com sucesso.'
                    }
                }

                return {
                    status: false,
                    response: 'Ocorreu algum erro ao ativar laboratório.'
                }
            }

            return {
                status: false,
                response: 'Laboratório está ativo ou não foi localizado.'
            }
        } catch (error) {
            return {
                status: false,
                message: 'Erro ao ativar laboratório.'
            }
        }
    }
}

export default new LaboratoryService();