import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Client } from '../Entites/Client.Entites';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent 
{
  ClientForm:FormGroup
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
     this.ClientForm = this.fb.group(formControls)
   }
   get nom() {return this.ClientForm.get('nom');}
  get prenom() { return this.ClientForm.get('prenom');}
  get email() {return this.ClientForm.get('email');}
  get adresse() {return this.ClientForm.get('adresse');}
  get mdp() {return this.ClientForm.get('mdp');}
  get telephone() { return this.ClientForm.get('telephone');}

   addNewClient() {
    let data = this.ClientForm.value;
    console.log(data);
    let client = new Client(
     undefined, data.nom,data.prenom,data.email,data.adresse,data.mdp,data.telephone);
    console.log(client);

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
    this.service.addClient(client).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Client est ajouté avec succés',
        });

        this.router.navigate(['/listClient']);
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
