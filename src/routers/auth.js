import { Router } from 'express';

import { validateBody } from '../utils/validateBody.js';
import { userLoginShema, userRegisterShema } from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { checkToken } from '../middlewares/checkToken.js';

import {
  loginUserController,
  loguotUserById,
  refreshUser,
  registerUserController,
} from '../controllers/auth.js';

const router = Router();

router.post(
  '/signup',
  validateBody(userRegisterShema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(userLoginShema),
  ctrlWrapper(loginUserController),
);

router.post('/logout', checkToken, ctrlWrapper(loguotUserById));

router.get('/current', checkToken, ctrlWrapper(refreshUser));

export default router;
