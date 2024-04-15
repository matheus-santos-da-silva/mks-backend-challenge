import { Body, Controller, Headers, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateMovie } from 'src/domain/use-cases/movies';
import { MovieResponseViewModel } from '../../view-models/movies/movie-vm';
import {
  HttpBadRequestError,
  HttpConflictError,
} from '../../swagger/http-error';
import { CreateMovieVM } from '../../view-models/movies/create-movie-vm';
import { validateToken } from 'src/data/utils/validate-token';

@ApiTags('Movies')
@Controller('movies')
export class CreateMoviesController {
  constructor(private readonly createMovie: CreateMovie) {}

  @ApiOperation({ summary: 'Create Movie' })
  @ApiResponse({
    status: 201,
    description: 'Created',
    type: MovieResponseViewModel,
  })
  @ApiResponse(HttpBadRequestError)
  @ApiResponse(HttpConflictError)
  @ApiBearerAuth()
  @Post('create')
  async execute(
    @Body() movie: CreateMovieVM,
    @Headers('Authorization') authorization: string,
  ): Promise<MovieResponseViewModel> {
    await validateToken(authorization);
    const newMovie = await this.createMovie.create(movie);
    return MovieResponseViewModel.toViewModel(newMovie);
  }
}
