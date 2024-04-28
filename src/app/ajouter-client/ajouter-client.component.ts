import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Utilisateur } from '../Entites/Utilisateur.Entites';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent 
{
  UtilisateurForm: FormGroup;

  constructor(
    private service: CrudService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toast: NgToastService
  ) {}

  // Getters pour accéder aux contrôles du formulaire
  get nom() { return this.UtilisateurForm.get('nom'); }
  get prenom() { return this.UtilisateurForm.get('prenom'); }
  get adresse() { return this.UtilisateurForm.get('adresse'); }
  get telephone() { return this.UtilisateurForm.get('telephone'); }
  get email() { return this.UtilisateurForm.get('email'); }
  get mdp() { return this.UtilisateurForm.get('mdp'); }
  get confirmPassword() { return this.UtilisateurForm.get('confirmPassword'); }
   

  ngOnInit(): void {
    // Initialisation du formulaire avec le nouveau champ pour la photo de profil
    this.UtilisateurForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', [Validators.required, this.telephoneValidator]],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }
  
  // Méthode pour valider la correspondance des mots de passe
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('mdp').value;
    const confirmPassword = formGroup.get('confirmPassword').value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword').setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmPassword').setErrors(null);
    }
  }

  // Méthode pour ajouter un nouvel utilisateur
  addNewUtilisateur() {
    const formData = this.UtilisateurForm.value;
    
    // Créez un objet Utilisateur à partir des données du formulaire
    const utilisateur = new Utilisateur(
      undefined,
      formData.nom,
      formData.prenom,
      formData.email,
      formData.date_de_naissance,
      formData.telephone,
      formData.adresse,
      formData.mdp,
      "Vacancier"
      
    );
  
    if (
      formData.nom == 0 ||
      formData.prenom == 0 ||
      formData.email == 0 ||
      formData.mdp == 0 
    ) {
      this.toast.info({
        detail: 'Veuillez remplir tous les champs obligatoires.',
        summary: 'Champs obligatoires manquants'
      });
    } 
    else {
      // Envoyez l'objet Utilisateur au service pour ajout
      
      this.service.addUtilisateur(utilisateur).subscribe(
        
        res => {
          console.log(res);
          this.toast.success({
            detail: 'Succes Message',
            summary: ' est ajouté avec succés',
          });

          
        },
        err => {
          console.log(err);
          this.router.navigate(['/verification']);
        }
      );
    }
  }
  

  // Méthode de validation du numéro de téléphone
  telephoneValidator(control: FormControl): { [key: string]: any } | null {
    const telephonePattern = /^(?:\s?|\+?[\d*\/\- ]{8,})$/;
    const valid = telephonePattern.test(control.value);
    return valid ? null : { invalidTelephone: true };
  }


}
