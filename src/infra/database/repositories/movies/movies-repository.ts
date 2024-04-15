import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateMovieRepository,
  DeleteMovieRepository,
  GetAllMoviesRepository,
  GetMovieByIdRepository,
  UpdateMovieRepository,
} from '../../../../data/protocols/movies';
import { UpdateMovieDTO } from '../../../../domain/DTOS/movies/update-movie-dto';
import { MovieEntity } from '../../../../domain/models/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesRepository
  implements
    CreateMovieRepository,
    GetAllMoviesRepository,
    GetMovieByIdRepository,
    UpdateMovieRepository,
    DeleteMovieRepository
{
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  async delete(movieId: string): Promise<void> {
    await this.movieRepository.delete(movieId);
  }

  async update(movieId: string, data: UpdateMovieDTO): Promise<MovieEntity> {
    await this.movieRepository.update(movieId, data);
    const updatedMovie = await this.movieRepository.findOne({
      where: { id: movieId },
    });
    return updatedMovie;
  }

  async getById(movieId: string): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOne({
      where: { id: movieId },
    });
    return movie;
  }

  async getAll(): Promise<MovieEntity[]> {
    const movies = await this.movieRepository.find();
    return movies;
  }

  async create(movie: MovieEntity): Promise<MovieEntity> {
    const newMovie = await this.movieRepository.save(movie);
    return newMovie;
  }
}
