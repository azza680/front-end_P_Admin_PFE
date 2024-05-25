export class Reservation {
    constructor(
        public id?: number,
        public date_arrivee?: string,
        public date_depart?: string,
        public nb_nuit?: number,
        public nb_vacancier?: number,
        public montant_paye?: string,
        public date?: Date,
        public etat?: boolean,
        public confirmation?: boolean,
        public id_annonce?: number, 
        public id_client?: number,  
    ) { }
}
