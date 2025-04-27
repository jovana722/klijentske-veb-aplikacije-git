import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { UtilsService } from '../../services/utils.service';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CinemaModel } from '../../models/cinema.model';
import { CinemaServices } from '../../services/cinema.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-order',
  imports: [MatCardModule, NgIf, NgFor, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public movie: MovieModel | null = null
  public cinemas: CinemaModel[] = CinemaServices.getCinemas()
  public selectedCinema: number = this.cinemas[0].id
  public selectedTicketCount: number = 1
  public selectedPrice: number = 6

  public constructor(private route: ActivatedRoute, public utils: UtilsService, private router: Router) {
    route.params.subscribe(params => {
      MovieService.getMovieById(params['id'])
        .then(rsp => {
          this.movie = rsp.data
        })
    })
  }

  public get movieGenres(): string {
    return this.movie?.movieGenres?.map(g => g.genre?.name).join(', ') || 'N/A';
  }

  public doOrder() {
    Swal.fire({
      title: `Želite da rezervišete kartu za film  ${this.movie?.title}?`,
      text: "Porudžbine možete otkazati u bilo kom trenutku sa svog korisničkog profila!",
      icon: "warning",
      showCancelButton: true,
      customClass: {
        popup: 'bg-dark'
      },
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Da, rezerviši!",
      cancelButtonText: "Otkaži",
    }).then((result) => {
      if (result.isConfirmed) {
        const result = UserService.createOrder({
          id: new Date().getTime(),
          movieId: this.movie!.movieId,
          title: this.movie!.title,
          cinema: CinemaServices.getCinemaById(this.selectedCinema)!,

          count: this.selectedTicketCount,
          pricePerItem: this.selectedPrice,
          status: 'ordered',
          rating: null
        })
        result ? this.router.navigate(['/user']) :
          Swal.fire({
            title: "Neuspešno kreiranje porudžbine",
            text: "Nešto nije u redu sa vašom porudžbinom!",
            icon: "error"
          });
      }
    })
  }
}
