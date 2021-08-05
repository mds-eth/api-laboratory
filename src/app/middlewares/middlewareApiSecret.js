export default async function (req, res, next)
{
    const authApiSecret = req.headers['api-secret'];

    if (!authApiSecret) {
        return res.status(401).json({ status: false, message: 'Campo api-secret obrigatório não enviado.' });
    }
    try {

        if (authApiSecret !== process.env.API_SECRET) {
            return res.status(401).json({ status: false, message: 'Acesso não autorizado.' });
        }

        return next();
    } catch (err) {
        return res.status(401).json({ status: false, message: 'Não autorizado.' });
    }
}
