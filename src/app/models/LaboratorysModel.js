import Sequelize, { Model } from 'sequelize';

export default class Laboratorys extends Model
{
    static init(sequelize)
    {
        super.init(
            {
                uuid: Sequelize.UUIDV4,
                name: Sequelize.STRING,
                address: Sequelize.STRING,
                opening_time: Sequelize.STRING,
                closing_time: Sequelize.STRING,
                phone: Sequelize.STRING,
                status: Sequelize.BOOLEAN
            },

            {
                sequelize,
            }
        );
        return this;
    }

    static associate(models)
    {
        this.belongsToMany(models.Exams, { through: 'exams_laboratorys', foreignKey: 'fk_id_laboratory' });
    }
}
