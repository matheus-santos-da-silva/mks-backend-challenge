import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MovieCategory } from '../DTOS/enum/category-enum';

@Entity({ name: 'movies' })
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false })
  title: string;

  @Column({ type: 'enum', enum: MovieCategory, nullable: false })
  category: MovieCategory;

  @Column({ name: 'release_year', nullable: false })
  releaseYear: string;

  @Column({ nullable: false })
  director: string;

  @Column({ nullable: false })
  synopsis: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: string;
}
