import { Router } from 'express';

import { validateBody } from '../utils/validateBody.js';
import { userLoginShema, userRegisterShema } from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  loginUserController,
  // loginUserController,
  // loguotUserById,
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

// router.post('/users/logout', ctrlWrapper(loguotUserById));

export default router;
