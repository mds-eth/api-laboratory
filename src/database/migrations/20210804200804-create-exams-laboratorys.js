'use strict';

module.exports = {
    up: (queryInterface, Sequelize) =>
    {
        return queryInterface.createTable('exams_laboratorys', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                truncate: true,
                restartIdentify: true
            },
            uuid: {
                type: Sequelize.UUID,
                allowNull: false
            },
            fk_id_exam: {
                type: Sequelize.INTEGER,
                references: { model: 'exams', key: 'id' },
                onDelete: 'CASCADE',
                allowNull: false
            },
            fk_id_laboratory: {
                type: Sequelize.INTEGER,
                references: { model: 'laboratorys', key: 'id' },
                onDelete: 'CASCADE',
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
        });
    },

    down: (queryInterface, Sequelize) =>
    {
        return queryInterface.dropTable('exams_laboratorys');
    }
};
