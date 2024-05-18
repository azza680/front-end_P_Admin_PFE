import { Component } from '@angular/core';
import { Utilisateur } from '../Entites/Utilisateur.Entites';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent {
  listUtilisateur: Utilisateur[];
  p:number=1;
  collection:any[]
  constructor(private service:CrudService,private router:Router ) { }
  //supprimer
  Deleteutilisateur(utilisateur: Utilisateur){
    if(confirm("Voulez vous supprimer cet utilisateur avec l'ID " + utilisateur.id + " ?")) {
     
      this.service.onDeleteUtilisateur(utilisateur.id).subscribe(() => {
        this.router.navigate(['/listUtilisateur']).then(() => {
          window.location.reload()
        })
      })
   
  }

  
}
updateUtilisateuretat(utilisateur:Utilisateur){
  console.log(utilisateur);

  let index=this.listUtilisateur.indexOf(utilisateur);
  if(utilisateur.etat==true)
  { if(confirm("Voulez vous disactiver cet compte avec l'ID " + utilisateur.id + " ?")) 
    {let newUtilisateur =new Utilisateur(utilisateur.id,utilisateur.nom,utilisateur.prenom,utilisateur.email,utilisateur.date_de_naissance,utilisateur.telephone,utilisateur.adresse,utilisateur.mdp,utilisateur.role,false)
this.service.updateUtilisateur(utilisateur.id,newUtilisateur).subscribe
(
  res=>{console.log(res)
  this.listUtilisateur[index]=newUtilisateur
  },
  err=>console.log(err)
)
  }}
 
  else{
    if(confirm("Voulez vous activer cet compte avec l'ID " + utilisateur.id + " ?")) {

    let newUtilisateur=new Utilisateur(utilisateur.id,utilisateur.nom,utilisateur.prenom,utilisateur.email,utilisateur.date_de_naissance,utilisateur.telephone,utilisateur.adresse,utilisateur.mdp,utilisateur.role,true)
    this.service.updateUtilisateur(utilisateur.id,newUtilisateur).subscribe
  (
    res=>{console.log(res)
    this.listUtilisateur[index]=newUtilisateur
    },
    err=>console.log(err)
  )}

  }



}
  ngOnInit(): void {
    this.service.getUtilisateur().subscribe(utilisateur => {
      this.listUtilisateur = utilisateur
    })
  }
}
