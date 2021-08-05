'use strict';

module.exports = {
    up: (queryInterface, Sequelize) =>
    {
        return queryInterface.createTable('laboratorys', {
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
            address: {
                type: Sequelize.STRING,
                allowNull: false
            },
            opening_time: {
                type: Sequelize.STRING,
                allowNull: false
            },
            closing_time: {
                type: Sequelize.STRING,
                allowNull: false
            },
            phone: {
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
        return queryInterface.dropTable('laboratorys');
    }
};
