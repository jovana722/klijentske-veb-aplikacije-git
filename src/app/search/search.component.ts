import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MovieModel } from '../../models/movie.model';
import { NgFor, NgIf } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";
import { MatFormField, MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatOptgroup, MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  imports: [
    MatTableModule, NgIf, NgFor,  
    MatButtonModule, LoadingComponent,RouterLink, 
    MatInputModule, MatFormField, FormsModule,
    MatCardModule, MatOption, MatFormField, MatSelectModule,
    MatChipsModule, MatIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  displayedColumns: string[] = ['title', 'movieGenres' ,'startDate', 'runTime','actions' ];
  dataSource: MovieModel[] | null = null
  allData: MovieModel[] | null = null
  genreList: string[] = []
  selectedGenre: string | null = null
  actorList: string[] = []
  selectedActor: string | null = null 
  userInput: string = ''
  directorList: string[] = []
  selectedDirector: string | null = null
  movieTitleList: string[] = []
  selectedMovieTitle: string | null = null


  public constructor(public utils: UtilsService){
    MovieService.getMovies()
      .then(rsp=>{
        this.dataSource = rsp.data
        this.allData = rsp.data
        this.generateSearchCriteria(rsp.data)
      })
  }

  public generateSearchCriteria(source: MovieModel[]) {
    this.genreList = source.flatMap(movie => movie.movieGenres.map(genre => genre.genre.name))
      .filter((genre, i, ar) => ar.indexOf(genre) === i);
  
    this.actorList = source.flatMap(movie => movie.movieActors.map(actor => actor.actor.name))
      .filter((actor, i, ar) => ar.indexOf(actor) === i);
  
    this.directorList = source.map(movie => movie.director.name)
      .filter((director, i, ar) => ar.indexOf(director) === i)

    this.movieTitleList = source.map(movie => movie.title)
      .filter((title, i ,ar) => ar.indexOf(title) === i)
  }

  doReset(){
    this.userInput = ''
    this.selectedGenre = null
    this.selectedActor = null
    this.selectedDirector = null
    this.selectedMovieTitle = null
    this.dataSource = this.allData
    this.generateSearchCriteria(this.allData!)
  }

  doFilterChain(){
    if(this.allData == null ) return

    this.dataSource = this.allData!
      .filter(movie => {
        if ( this.userInput == '') return true
        return movie.title.toLowerCase().includes(this.userInput.toLowerCase()) ||
               movie.originalTitle.toLowerCase().includes(this.userInput.toLowerCase()) ||
               movie.director.name.toLowerCase().includes(this.userInput.toLowerCase()) ||
               movie.movieGenres.some(genre => genre.genre.name.toLowerCase().includes(this.userInput.toLowerCase())) ||
               movie.movieActors.some( actor => actor.actor.name.toLowerCase().includes(this.userInput.toLowerCase()))
      }) 
      .filter(movie => {
        if(this.selectedGenre == null ) return true
        return movie.movieGenres.some(genre => genre.genre.name === this.selectedGenre)
      })
      .filter(movie => {
        if(this.selectedActor == null ) return true
        return movie.movieActors.some(actor => actor.actor.name === this.selectedActor)
      })
      .filter(movie => {
        if(this.selectedDirector == null ) return true
        return movie.director.name === this.selectedDirector
      })
      .filter(movie => {
        if(this.selectedMovieTitle == null ) return true
        return movie.title === this.selectedMovieTitle
      })

      this.generateSearchCriteria(this.dataSource)
  }
  
}
