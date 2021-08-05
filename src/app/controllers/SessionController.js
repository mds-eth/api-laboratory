import SessionService from '../services/SessionService';

class SessionController
{
    async createSession(req, res)
    {
        const response = await SessionService.createSessionService();

        if (response) {
            return res.status(200).json({ status: true, created_at: new Date(), token: response });
        }

        return res.status(400).json({ status: false, response: 'Ocorreu algum erro ao realizar a criação da sua sessão.' });
    }
}

export default new SessionController();