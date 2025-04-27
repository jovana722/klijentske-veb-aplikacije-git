import axios from 'axios';
import { MovieModel } from '../models/movie.model';
import { MovieGenre } from '../models/movieGenre.model';
import { MovieActor } from '../models/movieActor.model';

const client = axios.create({
  baseURL: 'https://movie.pequla.com/api',
  headers: {
    'Accept': 'application/json',
    'X-Client-Name': 'KVA/2025'
  },

  validateStatus: (status: number) => {
    return status === 200
  }
})


export class MovieService {
  static async getMovies(search = "", actor = ""): Promise<{ data: MovieModel[] }> {
    return client.request({
      url: '/movie',
      method: 'GET',
      params: {
        'createdAt': 'scheduledAt,asc',
        'actor': actor,
        "search": search
      }
    })
  }

  static async getMovieById(movieId: number) {
    return client.get(`/movie/${movieId}`);
  }


  static async getGenre(): Promise<string[]> {
    try {
      const response = await client.get('/movie');  
      const movies = response.data; 

      const genreNames = new Set<string>();

      for (const movie of movies) {
        movie.movieGenres.forEach((movieGenre: MovieGenre) => {
          genreNames.add(movieGenre.genre.name); 
        });
      }

      return Array.from(genreNames);
    } catch (error) {
      console.error("Error fetching movie genres:", error);
      return [];
    }
  }

  static async getAllActorNames(): Promise<string[]> {
    try {
      const response = await client.get('/movie'); 
      const movies = response.data;  

      const actorNames = new Set<string>();

      for (const movie of movies) {
        movie.movieActors.forEach((movieActor: MovieActor) => {
          actorNames.add(movieActor.actor.name);  
        });
      }

      return Array.from(actorNames);
    } catch (error) {
      console.error("Error fetching movie actors:", error);
      return [];
    }
  }

}
