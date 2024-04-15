import { Injectable } from '@nestjs/common';
import { MovieEntity } from '../../../domain/models/movie.entity';
import { CreateMovie } from '../../../domain/use-cases/movies';
import { CreateMovieRepository } from '../../protocols/movies';
import { CreateMovieDTO } from '../../../domain/DTOS/movies/create-movie-dto';

@Injectable()
export class CreateMovieImplementation implements CreateMovie {
  constructor(private readonly repository: CreateMovieRepository) {}

  async create(movie: CreateMovieDTO): Promise<MovieEntity> {
    const newMovie = await this.repository.create(movie);
    return newMovie;
  }
}
