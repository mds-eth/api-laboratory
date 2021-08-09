import jwt from 'jsonwebtoken';

import { v4 as uuidv4 } from 'uuid';

import authConfig from '../../auth/auth';

class SessionService
{
    async createSessionService()
    {
        try {

            const uuidSession = uuidv4();

            const hash = { uuidSession };

            const session = jwt.sign({ hash }, authConfig.secret, { expiresIn: authConfig.expiresIn });

            return session;
        } catch (error) {
            return false;
        }
    }
}

export default new SessionService();
