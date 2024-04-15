import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesControllersModule } from './presentation/controllers/movies/movies-controllers.module';
import { ConfigModule } from '@nestjs/config';
import { UsersControllersModule } from './presentation/controllers/users/users-controllers.module';
import { PORT, DB, DB_PASSWORD, DB_USERNAME } from './env';

@Module({
  imports: [
    MoviesControllersModule,
    UsersControllersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: PORT,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      synchronize: false,
      migrations: [`${__dirname}/infra/database/migrations/{.ts,*.js}`],
      migrationsRun: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
