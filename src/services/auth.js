import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UsersCollection } from '../db/models/Users.js';
import { env } from '../utils/env.js';

export const findUserByEmail = (email) => UsersCollection.findOne({ email });

export const updateUserWithToken = (userId) => {
  const token = jwt.sign(
    {
      id: userId,
    },
    env('JWT_SECRET'),
  );

  return UsersCollection.findByIdAndUpdate(userId, { token }, { new: true });
};

export const createUser = async (userData) => {
  const encryptedPwd = await bcrypt.hash(userData.password, 10);

  const user = await UsersCollection.create({
    ...userData,
    password: encryptedPwd,
  });

  return updateUserWithToken(user._id);
};

export const clearToken = (userId) =>
  UsersCollection.findByIdAndUpdate(userId, { token: '' });

export const findUserById = (userId) => UsersCollection.findById(userId);
