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
  ngOnInit(): void {
    this.service.getAnnonceur().subscribe(annonceur => {
      this.listAnnonceur = annonceur
    })
  }
}
