import { Component } from '@angular/core';
import { Annonceur } from '../Entites/Annonceur.Entites';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-annonceur',
  templateUrl: './list-annonceur.component.html',
  styleUrls: ['./list-annonceur.component.css']
})
export class ListAnnonceurComponent {
  listAnnonceur: Annonceur[];
  p:number=1;
  collection:any[]
  constructor(private service:CrudService,private router:Router ) { }
  //supprimer
  Deleteannonceur(annonceur: Annonceur){
    if(confirm("Voulez vous supprimer cet annonceur avec l'ID " + annonceur.id + " ?")) {
     
      this.service.onDeleteAnnonceur(annonceur.id).subscribe(() => {
        this.router.navigate(['/listAnnonceur']).then(() => {
          window.location.reload()
        })
      })
   
  }
}
updateAnnonceuretat(annonceur:Annonceur){
  
  console.log(annonceur);

  let index=this.listAnnonceur.indexOf(annonceur);
  if(annonceur.etat==true)
  { if(confirm("Voulez vous disactiver cet compte avec l'ID " + annonceur.id + " ?")) {let newAnnonceur =new Annonceur(annonceur.id,annonceur.nom,annonceur.prenom,annonceur.email,annonceur.adresse,annonceur.mdp,annonceur.telephone,false)
this.service.updateAnnonceur(annonceur.id,newAnnonceur).subscribe
(
  res=>{console.log(res)
  this.listAnnonceur[index]=newAnnonceur
  },
  err=>console.log(err)
)
  }}
 
  else{
    if(confirm("Voulez vous activer cet compte avec l'ID " + annonceur.id + " ?")) {

    let newAnnonceur=new Annonceur(annonceur.id,annonceur.nom,annonceur.prenom,annonceur.email,annonceur.adresse,annonceur.mdp,annonceur.telephone,true)
    this.service.updateAnnonceur(annonceur.id,newAnnonceur).subscribe
  (
    res=>{console.log(res)
    this.listAnnonceur[index]=newAnnonceur
    },
    err=>console.log(err)
  )}

  }
  


}
  ngOnInit(): void {
    this.service.getAnnonceur().subscribe(annonceur => {
      this.listAnnonceur = annonceur
    })
  }
}
