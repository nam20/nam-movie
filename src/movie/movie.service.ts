import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  getMovies(): string[] {
    return ['movie 1', 'movie 2', 'movie 3'];
  }

  getMovie(id: number): string {
    return `movie ${id}`;
  }

  createMovie(
    movie: { name: string, imageUrl: string }
  ): string {
    return movie.name;
  }

  updateMovie(
    id: number,
    movie: { name: string, imageUrl: string }
  ): string {
    return `${id} - ${movie.name}`;
  }

  deleteMovie(id: number): number {
    return id;
  }
}
