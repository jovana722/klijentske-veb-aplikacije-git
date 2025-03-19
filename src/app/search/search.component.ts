import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MovieModel } from '../../models/movie.model';
import { NgFor, NgIf } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-search',
  imports: [MatTableModule, NgIf, NgFor,  MatButtonModule, LoadingComponent,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  displayedColumns: string[] = ['title', 'movieGenres' ,'startDate', 'runTime','actions' ];
  dataSource: MovieModel[] | null = null;

  public constructor(public utils: UtilsService){
    MovieService.getMovies()
      .then(rsp=>this.dataSource = rsp.data)
  }
}
