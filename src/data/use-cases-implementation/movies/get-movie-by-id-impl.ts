import { Injectable } from '@nestjs/common';
import { GetMovieByIdRepository } from '../../../data/protocols/movies';
import { MovieEntity } from '../../../domain/models/movie.entity';
import { GetMovieById } from '../../../domain/use-cases/movies';

@Injectable()
export class GetMovieByIdImplementation implements GetMovieById {
  constructor(private readonly repository: GetMovieByIdRepository) {}

  async getById(movieId: string): Promise<MovieEntity> {
    const movie = await this.repository.getById(movieId);
    return movie;
  }
}
