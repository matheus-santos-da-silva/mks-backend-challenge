import { Controller, Get, Headers } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { validateToken } from 'src/data/utils/validate-token';
import { GetAllMovies } from 'src/domain/use-cases/movies';
import { MovieResponseViewModel } from 'src/presentation/view-models/movies/movie-vm';

@ApiTags('Movies')
@Controller('movies')
export class GetAllMoviesController {
  constructor(private readonly getAllMovies: GetAllMovies) {}

  @ApiOperation({ summary: 'Get All Movies' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: MovieResponseViewModel,
    isArray: true,
  })
  @ApiBearerAuth()
  @Get()
  async execute(
    @Headers('Authorization') authorization: string,
  ): Promise<MovieResponseViewModel[]> {
    await validateToken(authorization);
    const movies = await this.getAllMovies.getAll();

    const payload: MovieResponseViewModel[] = [];
    for (const movie of movies) {
      payload.push(MovieResponseViewModel.toViewModel(movie));
    }

    return payload;
  }
}
