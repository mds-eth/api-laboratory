export default async function (req, res, next)
{
    const authApiSecret = req.headers['api-secret'];

    if (!authApiSecret) {
        return res.status(401).json({ status: false, message: 'Acesso não autorizado. Chave inválida.' });
    }
    try {

        if (authApiSecret !== process.env.API_SECRET) {
            return res.status(401).json({ status: false, message: 'Acesso não autorizado. Chave inválida.' });
        }

        return next();
    } catch (err) {
        return res.status(401).json({ status: false, message: 'Acesso não autorizado. Chave inválida.' });
    }
}
