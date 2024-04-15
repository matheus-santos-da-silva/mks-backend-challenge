import { Module } from '@nestjs/common';
import { CreateMoviesController } from './create-movies.controller';
import { MoviesUseCasesModule } from 'src/data/use-cases-implementation/movies/movies-use-cases.module';
import { GetAllMoviesController } from './get-all-movies.controller';
import { UpdateMovieController } from './update-movie.controller';
import { GetMovieByIdController } from './get-movie-by-id.controller';
import { DeleteMovieController } from './delete-movie.controller';

@Module({
  imports: [MoviesUseCasesModule],
  controllers: [
    CreateMoviesController,
    GetAllMoviesController,
    UpdateMovieController,
    GetMovieByIdController,
    DeleteMovieController,
  ],
})
export class MoviesControllersModule {}
