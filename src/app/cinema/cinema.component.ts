import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CinemaModel } from '../../models/cinema.model';
import { CinemaServices } from '../../services/cinema.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-cinema',
  imports: [NgIf, MatTableModule],
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent {
  displayedColumns: string[] = ['name', 'location', 'workTime', 'phone'];
  dataSource: CinemaModel[] = CinemaServices.getCinemas();


}
  