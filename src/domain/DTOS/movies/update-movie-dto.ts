import { MovieCategory } from '../enum/category-enum';

export class UpdateMovieDTO {
  title?: string;
  category?: MovieCategory;
  releaseYear?: string;
  director?: string;
  synopsis?: string;
}
