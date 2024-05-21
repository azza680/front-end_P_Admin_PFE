import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Reservation } from '../Entites/Reservation.Entites';
import { Annonce } from '../Entites/Annonce.Entites';
import { Utilisateur } from '../Entites/Utilisateur.Entites';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
   Reservation:any;
  annonce:Annonce[];
  utilisateur:Utilisateur[];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getReservation().subscribe((reservations: Reservation[]) => {
      this.Reservation = reservations;
    });
  }

 
  }

