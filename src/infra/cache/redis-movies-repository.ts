import { Injectable } from '@nestjs/common';
import {
  GetAllMoviesRepository,
  GetMovieByIdRepository,
} from 'src/data/protocols/movies';
import { MovieEntity } from 'src/domain/models/movie.entity';
import { RedisService } from './config/redis';
import { MoviesRepository } from '../database/repositories/movies/movies-repository';

@Injectable()
export class RedisMoviesRepository
  implements GetAllMoviesRepository, GetMovieByIdRepository
{
  constructor(
    private readonly redis: RedisService,
    private readonly moviesRepository: MoviesRepository,
  ) {}

  async getAll(): Promise<MovieEntity[]> {
    const cachedMovies = await this.redis.get('movies');
    if (!cachedMovies) {
      const movies = await this.moviesRepository.getAll();
      await this.redis.set('movies', JSON.stringify(movies), 'EX', 300);
      return movies;
    }
    return JSON.parse(cachedMovies);
  }

  async getById(id: string): Promise<MovieEntity> {
    const cachedMovies: MovieEntity[] = JSON.parse(
      await this.redis.get('movies'),
    );
    let cachedMovie: MovieEntity = null;
    for (const movie of cachedMovies) {
      if (movie.id === id) {
        cachedMovie = movie;
      }
    }
    if (!cachedMovies) {
      const movie = await this.moviesRepository.getById(id);
      return movie;
    }
    return cachedMovie;
  }
}
