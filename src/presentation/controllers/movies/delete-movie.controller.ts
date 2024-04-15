import {
  Controller,
  Delete,
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
import { DeleteMovie, GetMovieById } from 'src/domain/use-cases/movies';
import {
  HttpNotFoundError,
  HttpUnauthorizedError,
} from 'src/presentation/swagger/http-error';

@ApiTags('Movies')
@Controller('movies')
export class DeleteMovieController {
  constructor(
    private readonly deleteMovie: DeleteMovie,
    private readonly getMovieById: GetMovieById,
  ) {}

  @ApiOperation({ summary: 'Delete Movie' })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse(HttpNotFoundError)
  @ApiResponse(HttpUnauthorizedError)
  @ApiParam({ name: 'id', type: String })
  @ApiBearerAuth()
  @Delete(':id')
  async execute(
    @Param('id') id: string,
    @Headers('Authorization') authorization: string,
  ): Promise<void> {
    await validateToken(authorization);

    const checkMovie = await this.getMovieById.getById(id);
    if (!checkMovie) throw new NotFoundException('Movie was not found');
    await this.deleteMovie.delete(id);
  }
}
