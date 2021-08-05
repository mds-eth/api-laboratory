'use strict';

module.exports = {
    up: (queryInterface, Sequelize) =>
    {
        return queryInterface.createTable('requests', {
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
            ip: {
                type: Sequelize.STRING,
                allowNull: false
            },
            headers: {
                type: Sequelize.JSON
            },
            body: {
                type: Sequelize.JSON
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
        return queryInterface.dropTable('requests');
    }
};
