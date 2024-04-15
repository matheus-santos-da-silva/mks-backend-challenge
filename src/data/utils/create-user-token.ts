import { sign } from 'jsonwebtoken';

interface payload {
  id: string;
  email: string;
}

export const createUserToken = async (payload: payload) => {
  const token = sign(payload, 'secret', {
    expiresIn: '24h',
  });
  return token;
};
