import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ errors: ['Login required'] });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({ where: { email, id } });

    if (!user) {
      return res.status(401).json({ errors: ['Usuario Invalido'] });
    }

    req.userEmail = email;
    req.userId = id;
    return next();
  } catch (err) {
    return res.status(401).json({ errors: ['Token Invalido'] });
  }
};
