import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';

import {
  // createSession,
  createUser,
  // deleteSession,
  // deleteSessionByUserId,
  findUserByEmail,
  updateUserWithToken,
} from '../services/auth.js';
// import { setupCookies } from '../utils/setupCookies.js';

export const registerUserController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);

  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  const newUser = await createUser(req.body);

  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
    },
    token: newUser.token,
  });
};

export const loginUserController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);

  if (!user) {
    throw createHttpError(401, 'Email or password are wrong');
  }

  const isPwdCorrect = await bcrypt.compare(req.body.password, user.password);

  if (!isPwdCorrect) {
    throw createHttpError(401, 'Email or password are wrong');
  }

  const updatedUser = await updateUserWithToken(user._id);

  res.json({
    user: {
      name: updatedUser.name,
      email: updatedUser.email,
    },
    token: updatedUser.token,
  });
};

// export const loguotUserById = async (req, res) => {
//   const sessionId = req.cookies.sessionId;
//   const refreshToken = req.cookies.refreshToken;

//   await deleteSession(sessionId, refreshToken);

//   res.clearCookie('sessionId');
//   res.clearCookie('refreshToken');
//   res.status(204).end();
// };
