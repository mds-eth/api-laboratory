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
        models.map(model => model.init(new Sequelize(dbConfig)));
    }
}

export default new Database();
