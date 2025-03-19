import axios from 'axios';
import { MovieModel, MovieResponse } from '../models/movie.model';

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


}
