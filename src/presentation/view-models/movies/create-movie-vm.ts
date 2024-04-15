import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { MovieCategory } from 'src/domain/DTOS/enum/category-enum';

export class CreateMovieVM {
  @ApiProperty({ example: 'Harry Potter - A pedra filosofal' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: MovieCategory.ADVENTURE })
  @IsString()
  @IsNotEmpty()
  category: MovieCategory;

  @ApiProperty({ example: '2001' })
  @IsString()
  @IsNotEmpty()
  releaseYear: string;

  @ApiProperty({ example: 'Chris Columbus' })
  @IsString()
  @IsNotEmpty()
  director: string;

  @ApiProperty({
    example:
      'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos.',
  })
  @IsString()
  @IsNotEmpty()
  synopsis: string;
}
