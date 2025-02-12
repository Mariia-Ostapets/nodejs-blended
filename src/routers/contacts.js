import { Router } from 'express';
import { checkToken } from '../middlewares/checkToken.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  addContactController,
  deleteContactController,
  getAllContactsController,
  updateContactController,
} from '../controllers/contacts.js';
import { validateBody } from '../utils/validateBody.js';
import {
  addContactSchema,
  patchContactSchema,
} from '../validation/contacts.js';

const router = new Router();

router.get('/', checkToken, ctrlWrapper(getAllContactsController));

router.post(
  '/',
  checkToken,
  validateBody(addContactSchema),
  ctrlWrapper(addContactController),
);
router.delete('/:id', checkToken, ctrlWrapper(deleteContactController));

router.patch(
  '/:id',
  checkToken,
  validateBody(patchContactSchema),
  ctrlWrapper(updateContactController),
);

export default router;
