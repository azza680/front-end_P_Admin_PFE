import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Reservation } from '../Entites/Reservation.Entites';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: Reservation[] = [];
  originalReservations: Reservation[] = [];
  searchQuery: string = '';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getReservations();
  }

  onSearchChange(event: any): void {
    const rawDate = event.target.value;
    if (rawDate) {
      // Convertir la date au format standard (yyyy-MM-dd)
      const formattedDate = this.convertToStandardDate(rawDate);
      this.searchQuery = formattedDate;
      this.searchReservationParDate();
    } else {
      this.searchQuery = '';
      this.searchReservationParDate();
    }
  }

  private convertToStandardDate(rawDate: string): string {
    const [year, month, day] = rawDate.split('-');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }

  searchReservationParDate(): void {
    const query = this.searchQuery.trim();
    if (query !== '') {
      // Convertir la chaîne de recherche en objet Date pour la comparaison
      const searchDate = new Date(query);
      this.reservations = this.originalReservations.filter((reservation: Reservation) => {
        // Convertir les dates à comparer en objets Date
        const dateArrivee = new Date(reservation.date_arrivee);
        const dateDepart = new Date(reservation.date_depart);
        const dateReservation = new Date(reservation.date);
  
        // Extraire le jour, le mois et l'année des dates à comparer
        const searchDay = searchDate.getDate();
        const searchMonth = searchDate.getMonth() + 1; // Les mois commencent à partir de zéro, donc +1
        const searchYear = searchDate.getFullYear();
  
        const dayArrivee = dateArrivee.getDate();
        const monthArrivee = dateArrivee.getMonth() + 1;
        const yearArrivee = dateArrivee.getFullYear();
  
        const dayDepart = dateDepart.getDate();
        const monthDepart = dateDepart.getMonth() + 1;
        const yearDepart = dateDepart.getFullYear();
  
        const dayReservation = dateReservation.getDate();
        const monthReservation = dateReservation.getMonth() + 1;
        const yearReservation = dateReservation.getFullYear();
  
        // Comparer les jours, mois et années
        return (
          dayArrivee === searchDay && monthArrivee === searchMonth && yearArrivee === searchYear ||
          dayDepart === searchDay && monthDepart === searchMonth && yearDepart === searchYear ||
          dayReservation === searchDay && monthReservation === searchMonth && yearReservation === searchYear
        );
      });
    } else {
      this.reservations = [...this.originalReservations];
    }
  }
  
  
  compareDates(date1: Date, date2: Date): boolean {
    return date1.toISOString().split('T')[0] === date2.toISOString().split('T')[0];
  }
  

  isHighlighted(reservation: Reservation): boolean {
    if (!this.searchQuery) {
      return false;
    }
    const dateRecherche = new Date(this.searchQuery).toISOString().split('T')[0];
    const dateArrivee = new Date(reservation.date_arrivee).toISOString().split('T')[0];
    return dateArrivee === dateRecherche;
  }

  private getReservations(): void {
    this.crudService.getReservation().subscribe((reservations: Reservation[]) => {
      this.reservations = reservations;
      this.originalReservations = [...reservations];
    });
  }
}
