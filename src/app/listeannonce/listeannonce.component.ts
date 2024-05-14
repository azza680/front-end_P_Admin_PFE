import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Annonce } from '../Entites/Annonce.Entites';
import { Utilisateur } from '../Entites/Utilisateur.Entites';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-listeannonce',
  templateUrl: './listeannonce.component.html',
  styleUrls: ['./listeannonce.component.css']
})
export class ListeannonceComponent implements OnInit {
  messageCommande = "";
  annonce: Annonce;
  listAnnonce: Annonce[];
  annonceur: Utilisateur;
  p: number = 1;
  nbannonce: number;
  id: number;
  collection: any[];
 
  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private route: Router,
    private router: ActivatedRoute,
    private toast: NgToastService,
  ) { }
     
  ngOnInit(): void {
    this.service.getAnnonce().subscribe((annonces: Annonce[]) => {
      this.listAnnonce = annonces;
    });

    let idEvent = this.router.snapshot.params['id'];
    this.id = idEvent;
    console.log(this.id);
    console.log("hatha annonceur :", this.annonceur);
    console.log("hatha list annonce:", this.listAnnonce);

    this.service.getUtilisateurByAnnonce(this.id).subscribe(annonceur => {
      this.annonceur = annonceur;
      this.service.listeAnnonceByAnnonceur(annonceur.id).subscribe(listAnnonce => {
        this.nbannonce = listAnnonce.length;
        console.log("hatha list annonce:", this.listAnnonce);
      });
      console.log("hatha annonceur :", annonceur);
    });

    this.service.getAnnonceById(this.id).subscribe(annonce => {
      this.annonce = annonce;
      console.log("hatha id annonce :", annonce.id);
      console.log("hatha annonceur :", this.annonceur);
    });
  }

  DeleteAnnonce(annonce: Annonce): void {
    if (confirm("Voulez-vous supprimer cette annonce avec l'ID " + annonce.id + " ?")) {
      this.service.onDeleteAnnonce(annonce.id).subscribe(() => {
        this.route.navigate(['/listeannonce']).then(() => {
          window.location.reload();
        });
      });
    }
  }
}
