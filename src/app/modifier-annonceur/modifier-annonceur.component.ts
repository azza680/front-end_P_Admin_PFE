import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Annonceur } from '../Entites/Annonceur.Entites';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-annonceur',
  templateUrl: './modifier-annonceur.component.html',
  styleUrls: ['./modifier-annonceur.component.css']
})
export class ModifierAnnonceurComponent 
{
  updateForm: FormGroup;
  id: number;
  currentAnnonceur = new Annonceur()
  userFile: any;
  public message!: string;
  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private route: Router,
    private router: ActivatedRoute
  ) {
    let formControles = {
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z A-Z .'-]+"), 
        Validators.minLength(4),
      ]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      mdp: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
     
    };
    this.updateForm = this.fb.group(formControles);
  }

  get nom() {
    return this.updateForm.get('nom');
  }
  get prenom() {
    return this.updateForm.get('prenom');
  }
  get email() {
    return this.updateForm.get('email');
  }
  get mdp() {
    return this.updateForm.get('mdp');
  }
  get adresse() {
    return this.updateForm.get('adresse');
  }
  get telephone() {
    return this.updateForm.get('telephone');
  }



  ngOnInit(): void {
    let idEvent = this.router.snapshot.params['id'];
    this.id = idEvent;
    this.service.findAnnonceurById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.updateForm.patchValue({
        nom: event.nom,
        prenom: event.prenom,
        email: event.email,
        adresse: event.adresse,
        mdp: event.mdp,
        telephone: event.telephone, });}); }
  updateAnnonceur() {
    let data = this.updateForm.value;
    let annonceur =new Annonceur(
      this.id,
      data.nom,
      data.prenom,
      data.email,
      data.adresse,
      data.mdp,
      data.telephone, );
    console.log(annonceur);
    console.log(data);
    this.service.updateAnnonceur(this.id,annonceur).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/listAnnonceur'])}); }


}
