import { Component } from '@angular/core';
import { AxiosError } from 'axios';
import { MovieService } from '../../services/movie.service';
import { NgFor, NgIf } from '@angular/common';
import { MovieModel } from '../../models/movie.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UtilsService } from '../../services/utils.service';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-home',
  imports: [NgIf, NgFor, MatButtonModule, MatCardModule, RouterLink, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public movies: MovieModel[] | null = null
  public error: string | null = null
  public searchValue: string = '';

  constructor(public utils: UtilsService) {
    this.getMovies()
  }

  public getMovies(search: string = "") {
    return MovieService.getMovies(search)
      .then((rsp) => this.movies = rsp.data)
      .catch((e: AxiosError) => this.error = `${e.code}: ${e.message}`);
  }

  public onSearchChanged(event: any): void {
    this.searchValue = event.target.value;
    this.getMovies(this.searchValue);
  }

  public onSearchClicked() {
    this.getMovies(this.searchValue)
  }
}
