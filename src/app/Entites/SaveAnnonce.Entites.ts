export class SaveAnnonce{
    constructor(
        public id?: number,
      public nom?: string,
      public image?: string[],
      public description?: string,
      public prix?: number,
      public nombre_chambre?: number,
      public type_d_hebergement?: string,
      public nb_voyageur?: number,
      public nb_chamber?: number,
      public nb_lits?: number,
      public nb_salles?: number,
      public equipement?: string[],
      public equipement_specail?: string[],
      public equipement_securite?: string[],
      public titre?: string,
      public reduction_semaine?: boolean,
      public reduction_mois?: boolean,
      public pays?: string,
      public etat?: boolean,
      public ville?: string,
      public code_postale?: string,
      public heure_depart?: string,
      public heure_arriver?: string,
      public date?: string,
      public verification?: boolean,
      public accorde_user?:boolean,
      public id_annonceur?:number,
    ){}
}