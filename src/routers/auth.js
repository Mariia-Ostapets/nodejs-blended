import { Router } from 'express';

import { validateBody } from '../utils/validateBody.js';
import { userLoginShema, userRegisterShema } from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  loginUserController,
  registerUserController,
} from '../controllers/auth.js';

const router = Router();

router.post(
  '/users/register',
  validateBody(userRegisterShema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/users/login',
  validateBody(userLoginShema),
  ctrlWrapper(loginUserController),
);

export default router;

// Створіть роут POST /users/login для аутентифікації користувача. Тіло запиту має в себе включати наступні властивості:
// email - обовʼязково
// password - обовʼязково
// Обробка цього роута має включати:
// Реєстрацію роута в файлі src/routers/users.js
// Валідацію отриманих даних
// Опис контролера для цього роута в файлі src/controllers/users.js
// Створення сервісу в файлі src/services/users.js
// Переконайтеся, що користувач із такою поштою та паролем існує в системі, поверніть за допомогою бібліотеки createHttpError 401 помилку в іншому випадку.
// Якщо користувача за переданими даними було знайдено, то створіть для нього сессію, в яку запишіть згенеровані access та refresh токени. Стара сесія, за її наявності, має бути видалена. Вкажіть час життя 15 хв для access токену та 30 днів для refresh токену.
// Запишіть рефреш токен в cookies, а access токен поверніть в тілі відповіді.

// Відповідь сервера, в разі успішного логіну, має бути зі статусом 200 і містити об’єкт з наступними властивостями:
// status — статус відповіді
// message — повідомлення про результат виконання операції "Successfully logged in an user!"
// data — об'єкт з властивістю accessToken, що містить значення створеного access токена
