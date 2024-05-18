import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Annonce } from '../Entites/Annonce.Entites';
import { Utilisateur } from '../Entites/Utilisateur.Entites';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { NgToastService } from 'ng-angular-popup';
import { SaveAnnonce } from '../Entites/SaveAnnonce.Entites';

@Component({
  selector: 'app-listeannonce',
  templateUrl: './listeannonce.component.html',
  styleUrls: ['./listeannonce.component.css']
})
export class ListeannonceComponent implements OnInit {
  messageCommande = "";
  annonce: Annonce;
  userDetails: Utilisateur;
  utilisateurs: Utilisateur[];
  listAnnonce: Annonce[];
  annonceurs: { [key: number]: Utilisateur } = {};
  p: number = 1;
  nbannonce: number;
  id: number;
  collection: any[];
  annonceForm: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private route: Router,
    private router: ActivatedRoute,
    private toast: NgToastService,
  ) {}

  ngOnInit(): void {
    

    this.annonceForm = this.fb.group({ 
      id: ['', Validators.required],
      type_d_hebergement: ['', Validators.required],
      nb_voyageur: ['', Validators.required],
      nb_chamber: ['', Validators.required],
      nb_lits: ['', Validators.required],
      nb_salles: ['', Validators.required],
      equipement: ['', Validators.required],
      equipement_specail: ['', Validators.required],
      equipement_securite: ['', Validators.required],
      image: ['', Validators.required],
      titre: ['', Validators.required],
      description: ['', Validators.required],
      reduction_semaine: [false],
      reduction_mois: [false],
      prix: ['', Validators.required],
      pays: ['', Validators.required],
      etat: [false],
      ville: ['', Validators.required],
      code_postale: ['', Validators.required],
      heure_depart: ['', Validators.required],
      heure_arriver: ['', Validators.required],
      date: ['', Validators.required],
      verification: [false]
    });

    this.loadAnnoncesWithUsers();

    this.id = this.router.snapshot.params['id'];
    if (this.id) {
      this.service.getAnnonceById(this.id).subscribe(annonce => {
        this.annonce = annonce;
        this.annonceForm.patchValue(annonce);
      });
    }
  }

  loadAnnoncesWithUsers(): void {
    this.service.getAnnonce().subscribe((annonces: Annonce[]) => {
      this.listAnnonce = annonces;
      this.listAnnonce.forEach(annonce => {
        this.service.getUtilisateurByAnnonce(annonce.id).subscribe(
          annonceur => {
            this.annonceurs[annonce.id] = annonceur;
            console.log('Utilisateur data for annonce ID', annonce.id, ':', annonceur);
          },
          error => {
            console.error('Error fetching utilisateur by annonce ID:', error);
          }
        );
      });
    });
  }

  

    

  selectAnnonce(annonce: Annonce): void {
    this.annonce = annonce;  // Set the active annonce
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

  onSubmit(): void {
    console.log(this.annonceForm.value);
  }
}
