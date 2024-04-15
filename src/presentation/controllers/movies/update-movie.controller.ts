import {
  Body,
  Controller,
  NotFoundException,
  Param,
  Patch,
  Headers,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetMovieById, UpdateMovie } from 'src/domain/use-cases/movies';
import {
  HttpNotFoundError,
  HttpUnauthorizedError,
} from 'src/presentation/swagger/http-error';
import { MovieResponseViewModel } from 'src/presentation/view-models/movies/movie-vm';
import { UpdateMovieVM } from 'src/presentation/view-models/movies/updatre-movie-vm';
import { validateToken } from 'src/data/utils/validate-token';

@ApiTags('Movies')
@Controller('movies')
export class UpdateMovieController {
  constructor(
    private readonly updateMovie: UpdateMovie,
    private readonly getMovieById: GetMovieById,
  ) {}

  @ApiOperation({ summary: 'Update Movie' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: MovieResponseViewModel,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiResponse(HttpUnauthorizedError)
  @ApiParam({ name: 'id', type: String })
  @ApiBearerAuth()
  @Patch(':id')
  async execute(
    @Param('id') id: string,
    @Body() movie: UpdateMovieVM,
    @Headers('Authorization') authorization: string,
  ): Promise<MovieResponseViewModel> {
    await validateToken(authorization);
    const checkMovie = await this.getMovieById.getById(id);
    if (!checkMovie) throw new NotFoundException('Movie was not found');
    const updatedMovie = await this.updateMovie.update(id, movie);

    return MovieResponseViewModel.toViewModel(updatedMovie);
  }
}
