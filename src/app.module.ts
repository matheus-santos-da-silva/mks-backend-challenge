import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesControllersModule } from './presentation/controllers/movies/movies-controllers.module';
import { ConfigModule } from '@nestjs/config';
import { UsersControllersModule } from './presentation/controllers/users/users-controllers.module';
@Module({
  imports: [
    MoviesControllersModule,
    UsersControllersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      url: `${process.env.DATABASE_URL}`,
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
