import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Headers,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { validateToken } from 'src/data/utils/validate-token';
import { GetMovieById } from 'src/domain/use-cases/movies';
import { HttpNotFoundError } from 'src/presentation/swagger/http-error';
import { MovieResponseViewModel } from 'src/presentation/view-models/movies/movie-vm';

@ApiTags('Movies')
@Controller('movies')
export class GetMovieByIdController {
  constructor(private readonly getMovieById: GetMovieById) {}

  @ApiOperation({ summary: 'Get Movie By Id' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: MovieResponseViewModel,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @ApiBearerAuth()
  @Get(':id')
  async execute(
    @Param('id') id: string,
    @Headers('Authorization') authorization: string,
  ): Promise<MovieResponseViewModel> {
    await validateToken(authorization);
    const movie = await this.getMovieById.getById(id);
    if (!movie) {
      throw new NotFoundException('Movie was not found');
    }

    return MovieResponseViewModel.toViewModel(movie);
  }
}
