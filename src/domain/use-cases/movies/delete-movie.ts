export abstract class DeleteMovie {
  abstract delete(movieId: string): Promise<void>;
}
