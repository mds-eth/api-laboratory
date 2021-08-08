module.exports = [
    {
        name: 'app-exams-labs',
        script: 'build/server.js',
        watch: true,
        exec_mode: 'cluster',
        instances: '1',
        autorestart: true,
        env: {
            NODE_ENV: 'development',
            TZ: 'America/Sao_Paulo'
        },
        env_production: {
            NODE_ENV: 'production',
            TZ: 'America/Sao_Paulo'
        }
    }
];
