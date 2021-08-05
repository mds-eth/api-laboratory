require('dotenv/config');

process.env.TZ = 'America/Sao_Paulo' 

import app from './app';

app.listen(process.env.PORT);