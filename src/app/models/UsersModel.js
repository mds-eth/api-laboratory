import Sequelize, { Model } from 'sequelize';

export default class Users extends Model
{
    static init(sequelize)
    {
        super.init(
            {
                uuid: Sequelize.UUIDV4,
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                birth_date: Sequelize.STRING
            },

            {
                sequelize,
            }
        );
        return this;
    }
}
