import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Annonceur } from '../Entites/Annonceur.Entites';

@Component({
  selector: 'app-ajouter-annonceur',
  templateUrl: './ajouter-annonceur.component.html',
  styleUrls: ['./ajouter-annonceur.component.css']
})
export class AjouterAnnonceurComponent 
{
  AnnonceurForm:FormGroup
  constructor(private service :CrudService,private router:Router,private fb:FormBuilder,private toast:NgToastService) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,
      ]),
      prenom: new FormControl('',[
        Validators.required,]),
      email: new FormControl('',[
          Validators.required,
        Validators.email]),
        adresse: new FormControl('',[
          Validators.required,]),
      mdp: new FormControl('',[
        Validators.required,]),
    telephone: new FormControl( '', [
      Validators.required,]),}
     this.AnnonceurForm = this.fb.group(formControls)
   }
   get nom() {return this.AnnonceurForm.get('nom');}
  get prenom() { return this.AnnonceurForm.get('prenom');}
  get email() {return this.AnnonceurForm.get('email');}
  get adresse() {return this.AnnonceurForm.get('adresse');}
  get mdp() {return this.AnnonceurForm.get('mdp');}
  get telephone() { return this.AnnonceurForm.get('telephone');}

   addNewAnnonceur() {
    let data = this.AnnonceurForm.value;
    console.log(data);
    let annonceur = new Annonceur(
     undefined, data.nom,data.prenom,data.email,data.adresse,data.mdp,data.telephone);
    console.log(annonceur);

    if (
      data.nom == 0 ||
      data.prenom == 0||
      data.email == 0 ||
      data.adresse == 0 ||
      data.mdp == 0 ||
      data.telephone ==0
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Votre champs est obligatoire',
      });
    } else {
    this.service.addAnnonceur(annonceur).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Annonceur est ajouté avec succés',
        });

        this.router.navigate(['/listAnnonceur']);
      },
      err=>{
        console.log(err);
        this.toast.error({
          detail: 'Error Message',
          summary: 'Probléme de Serveur',
        }); }
    )

    }
  }

  //supprimer

    ngOnInit(): void {
    }


}
