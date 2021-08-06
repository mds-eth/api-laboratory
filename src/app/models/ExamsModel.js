import Sequelize, { Model } from 'sequelize';

export default class Exams extends Model
{
    static init(sequelize)
    {
        super.init(
            {
                uuid: Sequelize.UUIDV4,
                name: Sequelize.STRING,
                type: Sequelize.STRING,
                value: Sequelize.FLOAT,
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
        this.belongsToMany(models.Laboratorys, { through: 'exams_laboratorys', foreignKey: 'fk_id_exam', as: 'laboratory' });
    }
}
