import { Injectable } from '@nestjs/common';
import { UpdateMovieRepository } from '../../../data/protocols/movies';
import { UpdateMovieDTO } from '../../../domain/DTOS/movies/update-movie-dto';
import { MovieEntity } from '../../../domain/models/movie.entity';
import { UpdateMovie } from '../../../domain/use-cases/movies';

@Injectable()
export class UpdateMovieImplementation implements UpdateMovie {
  constructor(private readonly repository: UpdateMovieRepository) {}

  async update(movieId: string, data: UpdateMovieDTO): Promise<MovieEntity> {
    const updatedMovie = await this.repository.update(movieId, data);
    return updatedMovie;
  }
}
