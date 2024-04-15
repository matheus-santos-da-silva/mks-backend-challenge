import { Injectable } from '@nestjs/common';
import { DeleteMovieRepository } from '../../../data/protocols/movies';
import { DeleteMovie } from '../../../domain/use-cases/movies';

@Injectable()
export class DeleteMovieImplementation implements DeleteMovie {
  constructor(private readonly repository: DeleteMovieRepository) {}

  async delete(movieId: string): Promise<void> {
    await this.repository.delete(movieId);
  }
}
