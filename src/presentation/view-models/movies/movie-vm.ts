import { ApiProperty } from '@nestjs/swagger';
import { MovieCategory } from 'src/domain/DTOS/enum/category-enum';
import { MovieEntity } from 'src/domain/models/movie.entity';

export class MovieResponseViewModel {
  @ApiProperty({ example: '8a18f940-47cc-4174-a32e-1398e290b6f8' })
  id: string;

  @ApiProperty({ example: 'Harry Potter - A pedra filosofal' })
  title: string;

  @ApiProperty({ example: 'Adventure' })
  category: MovieCategory;

  @ApiProperty({ example: '2001' })
  releaseYear: string;

  @ApiProperty({ example: 'Chris Columbus' })
  director: string;

  @ApiProperty({
    example:
      'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos.',
  })
  synopsis: string;

  constructor(
    id: string,
    title: string,
    category: MovieCategory,
    releaseYear: string,
    director: string,
    synopsis: string,
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.releaseYear = releaseYear;
    this.director = director;
    this.synopsis = synopsis;
  }

  static toViewModel({
    id,
    title,
    category,
    releaseYear,
    director,
    synopsis,
  }: MovieEntity): MovieResponseViewModel {
    return new MovieResponseViewModel(
      id,
      title,
      category,
      releaseYear,
      director,
      synopsis,
    );
  }
}
