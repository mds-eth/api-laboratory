import Sequelize, { Model } from 'sequelize';

export default class ExamsLaboratorys extends Model
{
    static init(sequelize)
    {
        super.init(
            {
                uuid: Sequelize.UUIDV4,
                fk_id_exam: Sequelize.INTEGER,
                fk_id_laboratory: Sequelize.INTEGER,
            },

            {
                sequelize,
            }
        );
        return this;
    }
}
