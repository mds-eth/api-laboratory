import jwt from 'jsonwebtoken';

import { promisify } from 'util';
import authConfig from '../../auth/auth';

export default async function (req, res, next)
{
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ status: false, message: 'Campo Authorization obrigatório não enviado.' });
    }

    try {

        var decoded = await promisify(jwt.verify)(authHeader.split(' ')[1], authConfig.secret);

        const { uuidSession } = decoded.hash;

        req.uuidSession = uuidSession;

        return next();
    } catch (err) {
        return res.status(401).json({ status: false, message: 'Não autorizado.' });
    }
}
