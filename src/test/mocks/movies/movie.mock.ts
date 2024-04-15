import { MovieCategory } from '../../../domain/DTOS/enum/category-enum';
import { MovieEntity } from '../../../domain/models/movie.entity';

export const MovieEntityMock: MovieEntity = {
  id: '1',
  category: MovieCategory.ADVENTURE,
  director: 'director-mock',
  releaseYear: 'realease-year-mock',
  synopsis: 'synopsis-mock',
  title: 'title-mock',
  createdAt: String(new Date()),
  updatedAt: String(new Date()),
};
