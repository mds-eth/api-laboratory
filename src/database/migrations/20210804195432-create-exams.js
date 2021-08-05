'use strict';

module.exports = {
    up: (queryInterface, Sequelize) =>
    {
        return queryInterface.createTable('exams', {
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
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false
            },
            status: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
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
        return queryInterface.dropTable('exams');
    }
};
