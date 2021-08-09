import Sequelize from 'sequelize';

import dbConfig from '../../config/database';

import ExamsModel from '../../app/models/ExamsModel';
import LaboratorysModel from '../../app/models/LaboratorysModel';
import RequestsModel from '../../app/models/RequestsModel';
import ExamsLaboratorys from '../../app/models/ExamsLaboratoryModel';

const models = [ExamsModel, LaboratorysModel, RequestsModel, ExamsLaboratorys];

class Database
{
    constructor()
    {
        this.init();
    }

    init()
    {
        this.connection = new Sequelize(dbConfig);
        models.map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();
