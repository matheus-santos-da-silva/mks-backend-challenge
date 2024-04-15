import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CreateMovieRepository,
  DeleteMovieRepository,
  GetAllMoviesRepository,
  GetMovieByIdRepository,
  UpdateMovieRepository,
} from '../../../../data/protocols/movies';
import { MovieEntity } from '../../../../domain/models/movie.entity';
import { MoviesRepository } from './movies-repository';
import { RedisMoviesRepository } from '../../../../infra/cache/redis-movies-repository';
import { RedisService } from '../../../../infra/cache/config/redis';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity])],
  providers: [
    RedisService,
    MoviesRepository,
    {
      provide: CreateMovieRepository,
      useClass: MoviesRepository,
    },
    {
      provide: GetAllMoviesRepository,
      useClass: RedisMoviesRepository,
    },
    {
      provide: GetMovieByIdRepository,
      useClass: RedisMoviesRepository,
    },
    {
      provide: UpdateMovieRepository,
      useClass: MoviesRepository,
    },
    {
      provide: DeleteMovieRepository,
      useClass: MoviesRepository,
    },
  ],
  exports: [
    CreateMovieRepository,
    GetAllMoviesRepository,
    GetMovieByIdRepository,
    UpdateMovieRepository,
    DeleteMovieRepository,
  ],
})
export class MoviesRepositoriesModule {}
