import { Component } from '@angular/core';
import { AxiosError } from 'axios';
import { MovieService } from '../../services/movie.service';
import { NgFor, NgIf } from '@angular/common';
import { MovieModel } from '../../models/movie.model';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-home',
  imports: [ NgIf, NgFor, MatButtonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public movies: MovieModel[] | null = null
  public error: string | null = null

  constructor(public utils: UtilsService){
    MovieService.getMovies(0, 3)
      .then(rsp => this.movies = rsp.data.content )
      .catch((e: AxiosError) => this.error = `${e.code}: ${e.message}`);
  }
    
  
}
