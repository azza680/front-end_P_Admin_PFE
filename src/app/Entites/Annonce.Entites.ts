export class Annonce{
    constructor(
        public id?:number,
        public nom?:string,
        public image?:string,
        public description?:string,
        public adresse?:string,
        public date_disponible?:Date,
        public heure?:Date,
        public prix?:number,
        public nombre_chambre?:number,
    ){}
}