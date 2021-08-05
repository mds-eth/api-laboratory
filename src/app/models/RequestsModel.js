import Sequelize, { Model } from 'sequelize';

export default class Requests extends Model
{
    static init(sequelize)
    {
        super.init(
            {
                uuid: Sequelize.UUIDV4,
                ip: Sequelize.STRING,
                headers: Sequelize.JSON,
                body: Sequelize.JSON
            },

            {
                sequelize,
            }
        );
        return this;
    }
}
