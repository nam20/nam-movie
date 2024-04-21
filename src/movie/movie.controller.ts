import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MovieService } from "./movie.service";

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getMovies(): string[] {
    return this.movieService.getMovies();
  }

  @Get(':id')
  getMovie(@Param('id') id: number): string {
    return this.movieService.getMovie(id);
  }

  @Post()
  createMovie(
    @Body() movie: { name: string, imageUrl: string }
  ): string {
    return this.movieService.createMovie(movie);
  }

  @Put(':id')
  updateMovie(
    @Param('id') id: number,
    @Body() movie: { name: string, imageUrl: string }
  ): string {
    return this.movieService.updateMovie(id, movie);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: number): number {
    return this.movieService.deleteMovie(id);
  }

}
