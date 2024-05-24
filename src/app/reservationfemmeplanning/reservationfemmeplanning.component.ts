import { Component, OnInit } from '@angular/core';
import { Planning } from '../Entites/Planning.Entites';
import { Utilisateur } from '../Entites/Utilisateur.Entites';
import { CrudService } from '../service/crud.service';
import { ReservationFM } from '../Entites/ReservationFM.Entites';

@Component({
  selector: 'app-reservationfemmeplanning',
  templateUrl: './reservationfemmeplanning.component.html',
  styleUrls: ['./reservationfemmeplanning.component.css']
})
export class ReservationfemmeplanningComponent implements OnInit {
  ReservationFM: ReservationFM[];
  utilisateur: Utilisateur[];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getReservationFM().subscribe((reservationFM: ReservationFM[]) => {
      this.ReservationFM = reservationFM;
    });
  }
}
