import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { MovieCategory } from 'src/domain/DTOS/enum/category-enum';

export class UpdateMovieVM {
  @ApiProperty({ example: 'Harry Potter - A pedra filosofal' })
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty({ example: MovieCategory.ADVENTURE })
  @IsString()
  @IsOptional()
  category: MovieCategory;

  @ApiProperty({ example: '2001' })
  @IsString()
  @IsOptional()
  releaseYear: string;

  @ApiProperty({ example: 'Chris Columbus' })
  @IsString()
  @IsOptional()
  director: string;

  @ApiProperty({
    example:
      'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos.',
  })
  @IsString()
  @IsOptional()
  synopsis: string;
}
