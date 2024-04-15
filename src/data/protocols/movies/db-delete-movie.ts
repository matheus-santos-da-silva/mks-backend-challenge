export abstract class DeleteMovieRepository {
  abstract delete(movieId: string): Promise<void>;
}
