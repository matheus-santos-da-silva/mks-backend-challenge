import { UnauthorizedException } from '@nestjs/common';
import { verify } from 'jsonwebtoken';

export const validateToken = async (authorization: string) => {
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedException('Invalid or missing Bearer Token');
  }

  const token = authorization.split(' ')[1];
  if (!token) {
    throw new UnauthorizedException('Invalid Token');
  }

  verify(token, 'secret', (error, decoded) => {
    if (error) {
      throw new UnauthorizedException('Invalid Token');
    }

    if (!decoded || typeof decoded !== 'object') {
      throw new UnauthorizedException('Invalid Token');
    }
  });
};
