require('dotenv/config');

module.exports = {
    dialect: 'mysql',
    host: process.env.DB_HOST_MYSQL,
    username: process.env.DB_USER_MYSQL,
    password: process.env.DB_PASS_MYSQL,
    port: process.env.DB_PORT_MYSQL,
    database: process.env.DB_DATABASE_MYSQL,
    timezone: 'America/Sao_Paulo',
    dialectOptions: {
        timezone: 'local',
    },
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
