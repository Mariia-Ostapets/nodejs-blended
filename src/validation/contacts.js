import Joi from 'joi';
import { numberRegexp } from '../constants/index.js';

export const addContactSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    'string.min': 'Name should be at least 3 characters',
    'string.max': 'Name should be at most 50 characters',
    'any.required': 'Name is required',
  }),
  number: Joi.string().pattern(numberRegexp).required().messages({
    'string.pattern.base': 'Number should be in format +XXXXXXXXXXXX',
    'any.required': 'Number is required',
  }),
});

export const patchContactSchema = Joi.object({
  name: Joi.string().min(3).max(50).messages({
    'string.min': 'Name should be at least 3 characters',
    'string.max': 'Name should be at most 50 characters',
  }),
  number: Joi.string().pattern(numberRegexp).messages({
    'string.pattern.base': 'Number should be in format +XXXXXXXXXXXX',
  }),
});
