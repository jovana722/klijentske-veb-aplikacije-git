import { Director } from './director.model';
import { MovieActor } from './movieActor.model';
import { MovieGenre } from './movieGenre.model';

export interface MovieModel {
  movieId: number;
  internalId: string;
  corporateId: string;
  directorId: number;
  title: string;
  originalTitle: string;
  description: string;
  shortDescription: string;
  poster: string;
  startDate: string;
  shortUrl: string;
  runTime: number;
  createdAt: string;
  updatedAt?: string | null;
  director: Director;
  movieActors: MovieActor[];
  movieGenres: MovieGenre[];
}

export interface MovieResponse {
  content: MovieModel[];
}