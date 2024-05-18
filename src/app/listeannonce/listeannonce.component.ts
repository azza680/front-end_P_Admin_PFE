import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Annonce } from '../Entites/Annonce.Entites';
import { Utilisateur } from '../Entites/Utilisateur.Entites';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { NgToastService } from 'ng-angular-popup';
import { SaveAnnonce } from '../Entites/SaveAnnonce.Entites';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-listeannonce',
  templateUrl: './listeannonce.component.html',
  styleUrls: ['./listeannonce.component.css']
})
export class ListeannonceComponent implements OnInit {
  messageCommande = "";
  annonce: Annonce;
  listAnnonce: Annonce[];
  p: number = 1;
  collection: any[];
  annonceForm: FormGroup; 
  annonceur: Utilisateur;
  listAnnonceur: Utilisateur[];

  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private route: Router,
    private router: ActivatedRoute,
    private toast: NgToastService,
  ) {}

  ngOnInit(): void {
    console.log("hatha annonceur :", this.listAnnonceur);
    console.log("hatha list annonce:", this.listAnnonce);

    // Récupérer les annonces
    this.service.getAnnonce().subscribe(annonce => {
        this.listAnnonce = annonce;

        // Créer un tableau d'observables pour récupérer les utilisateurs associés aux annonces
        const observables = this.listAnnonce.map(i => this.service.getUtilisateurByAnnonce(i.id));

        // Utiliser forkJoin pour attendre que toutes les requêtes soient terminées
        forkJoin(observables).subscribe(results => {
            this.listAnnonceur = results;
            console.log("hatha list annonceur après ajout:", this.listAnnonceur);
        });
    });

    console.log("hatha list annonce après chargement:", this.listAnnonce);
  }
  
  
  updateAnnoncetat(annonce:Annonce)
  {
    console.log(annonce);
    let index=this.listAnnonce.indexOf(annonce);
    if(annonce.etat==true)
      { if(confirm("Voulez vous disactiver cette annonce avec l'ID " + annonce.id + " ?")) 
        {let newannonce =new Annonce(annonce.id, annonce.nom, annonce.image,annonce. description, 
        annonce.prix, annonce.nombre_chambre, annonce.type_d_hebergement, annonce.nb_voyageur, annonce.nb_chamber, annonce.nb_lits,
        annonce.nb_salles, annonce.equipement, annonce.equipement_specail, annonce.equipement_securite,annonce. titre,
        annonce.reduction_semaine, annonce.reduction_mois, annonce.pays, false, annonce.ville, annonce.code_postale,
        annonce.heure_depart, annonce.heure_arriver, annonce.date, annonce.verification,annonce.accorde_user)
  
      this.service.updateAnnonce(annonce.id,newannonce).subscribe
  (
    res=>{console.log(res)
    this.listAnnonce[index]=newannonce
    this.route.navigate(['/listeannonce']).then(() => {
      window.location.reload();
    });
    },
    err=>console.log(err)
  )}

    
  }else 
  {
    if(confirm("Voulez vous activer cette annonce avec l'ID " + annonce.id + " ?")) {
      let newannonce =new Annonce(annonce.id, annonce.nom, annonce.image,annonce. description,
        annonce.prix, annonce.nombre_chambre, annonce.type_d_hebergement, annonce.nb_voyageur, annonce.nb_chamber, annonce.nb_lits,
        annonce.nb_salles, annonce.equipement, annonce.equipement_specail, annonce.equipement_securite,annonce. titre,
        annonce.reduction_semaine, annonce.reduction_mois, annonce.pays, true, annonce.ville, annonce.code_postale,
        annonce.heure_depart, annonce.heure_arriver, annonce.date, annonce.verification,annonce.accorde_user)
        console.log("***************",newannonce)
      this.service.updateAnnonce(annonce.id,newannonce).subscribe
    (
      res=>{console.log(res)
        console.log("***************",newannonce)
        this.listAnnonce[index]=newannonce
        this.route.navigate(['/listeannonce']).then(() => {
          window.location.reload();
        });
      },
      err=>console.log(err)
    )}
  }
  }
  sendEmailAnnonceur(id:number)
  {
    this.service.getUtilisateurByAnnonce(id).subscribe(annonceur => {

      this.annonceur = annonceur;
      console.log("hatha annonceur",annonceur)
      this.service.sendEmailAnnonceur(annonceur).subscribe(
        res=>{
          console.log(res);
          alert("Email envoyée a "+annonceur.email)
          this.route.navigate(['/listeannonce']).then(() => {
            window.location.reload();
          });
      },
        err=>{
          {
            console.log(err);
            alert("Il y a une erreur ")
          } 
        }
      )})
    
  }
  updateAnnonceVerif(annonce:Annonce)
  {
    console.log("annonce hathy",annonce);
    console.log(annonce.id);
    let index=this.listAnnonce.indexOf(annonce);
    let newannonce =new  Annonce(annonce.id, annonce.nom, annonce.image,annonce. description, 
      annonce.prix, annonce.nombre_chambre, annonce.type_d_hebergement, annonce.nb_voyageur, annonce.nb_chamber, annonce.nb_lits,
      annonce.nb_salles, annonce.equipement, annonce.equipement_specail, annonce.equipement_securite,annonce. titre,
      annonce.reduction_semaine, annonce.reduction_mois, annonce.pays, annonce.etat, annonce.ville, annonce.code_postale,
      annonce.heure_depart, annonce.heure_arriver, annonce.date, true,annonce.accorde_user)
      console.log("new annonce = ***************** ",newannonce);

    this.service.updateAnnonce(annonce.id,newannonce).subscribe
(
  res=>{console.log(res)
  this.listAnnonce[index]=newannonce
  this.route.navigate(['/listeannonce']).then(() => {
    window.location.reload();
  });
  },
  err=>console.log(err)
)
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
