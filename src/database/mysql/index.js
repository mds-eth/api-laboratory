import Sequelize from 'sequelize';

import dbConfig from '../../config/database';

import ExamsModel from '../../app/models/ExamsModel';
import LaboratorysModel from '../../app/models/LaboratorysModel';
import RequestsModel from '../../app/models/RequestsModel';
import UsersModel from '../../app/models/UsersModel';

const models = [ExamsModel, LaboratorysModel, RequestsModel, UsersModel];

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
