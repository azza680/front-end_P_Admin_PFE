import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { FemmeDeMenage } from '../Entites/FemmeDeMenage.Entites';

@Component({
  selector: 'app-ajouter-femme-de-menage',
  templateUrl: './ajouter-femme-de-menage.component.html',
  styleUrls: ['./ajouter-femme-de-menage.component.css']
})
export class AjouterFemmeDeMenageComponent {

  FemmeDeMenageForm:FormGroup
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
      mdp: new FormControl('',[
          Validators.required,]),
      adresse: new FormControl('',[
            Validators.required,]),
      telephone: new FormControl( '', [
        Validators.required,]),}
      this.FemmeDeMenageForm = this.fb.group(formControls)
   }
   get nom() {return this.FemmeDeMenageForm.get('nom');}
  get prenom() { return this.FemmeDeMenageForm.get('prenom');}
  get email() {return this.FemmeDeMenageForm.get('email');}
  get mdp() {return this.FemmeDeMenageForm.get('mdp');}
  get adresse() {return this.FemmeDeMenageForm.get('adresse');}
  get telephone() { return this.FemmeDeMenageForm.get('telephone');}

   addNewFemmeDeMenage() {
    let data = this.FemmeDeMenageForm.value;
    console.log(data);
    let femmeDM = new FemmeDeMenage(
     undefined, data.nom,data.prenom,data.email,data.mdp,data.adresse,data.telephone);
    console.log(femmeDM);

    if (
      data.nom == 0 ||
      data.prenom == 0||
      data.email == 0 ||
      data.mdp == 0 ||
      data.adresse == 0 ||
      data.telephone ==0
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Votre champs est obligatoire',
      });
    } else {
    this.service.addFemmeDM(femmeDM).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Femme De Menage est ajouté avec succés',
        });

        this.router.navigate(['/listFemmeDeMenage']);
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
