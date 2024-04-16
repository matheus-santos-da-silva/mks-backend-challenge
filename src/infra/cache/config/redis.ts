import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { REDIS_URL } from 'src/env';

@Injectable()
export class RedisService extends Redis {
  constructor() {
    super(REDIS_URL);

    super.on('error', (error) => {
      console.log('Error on Redis');
      console.log(error);
      process.exit(1);
    });

    super.on('connect', () => {
      console.log('Redis connected!');
    });
  }
}
