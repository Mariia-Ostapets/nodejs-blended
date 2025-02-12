import Joi from 'joi';
import { emailRegexp } from '../constants/index.js';

export const userRegisterShema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    'string.min': 'Name should be at least 3 characters',
    'string.max': 'Name should be at most 50 characters',
    'any.required': 'Name is required',
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    'string.pattern.base': 'Email should be in format example@mail.com',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.min': 'Password should be at least 8 characters',
    'any.required': 'Password is required',
  }),
});

export const userLoginShema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    'string.pattern.base': 'Email should be in format example@mail.com',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.min': 'Password should be at least 8 characters',
    'any.required': 'Password is required',
  }),
});
