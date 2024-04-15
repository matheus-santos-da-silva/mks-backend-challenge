import { Injectable } from '@nestjs/common';
import { GetAllMoviesRepository } from '../../../data/protocols/movies';
import { MovieEntity } from '../../../domain/models/movie.entity';
import { GetAllMovies } from '../../../domain/use-cases/movies';

@Injectable()
export class GetAllMoviesImplementation implements GetAllMovies {
  constructor(private readonly repository: GetAllMoviesRepository) {}

  async getAll(): Promise<MovieEntity[]> {
    const movies = await this.repository.getAll();
    return movies;
  }
}
