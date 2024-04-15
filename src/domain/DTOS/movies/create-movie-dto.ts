import { MovieCategory } from '../enum/category-enum';

export class CreateMovieDTO {
  title: string;
  category: MovieCategory;
  releaseYear: string;
  director: string;
  synopsis: string;
}
