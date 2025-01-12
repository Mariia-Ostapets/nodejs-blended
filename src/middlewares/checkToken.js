import createHttpError from 'http-errors';
import jwt from 'jsonwebtoken';
import { env } from '../utils/env.js';
import { findUserById } from '../services/auth.js';

export const checkToken = async (req, res, next) => {
  const header = req.get('Authorization');
  if (!header) {
    next(createHttpError(401, 'Not authorizated1'));
    return;
  }
  const [bearer, token] = header.split(' ');

  if (bearer !== 'Bearer' || !token) {
    next(createHttpError(401, 'Not authorizated 2'));
    return;
  }

  const { id } = jwt.verify(token, env('JWT_SECRET'));

  const user = await findUserById(id);

  if (!user) {
    next(createHttpError(401, 'Not authorizated 3'));
    return;
  }

  req.user = user;
  next();
};
