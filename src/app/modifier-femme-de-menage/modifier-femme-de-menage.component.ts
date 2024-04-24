import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FemmeDeMenage } from '../Entites/FemmeDeMenage.Entites';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-femme-de-menage',
  templateUrl: './modifier-femme-de-menage.component.html',
  styleUrls: ['./modifier-femme-de-menage.component.css']
})
export class ModifierFemmeDeMenageComponent 
{
  updateForm: FormGroup;
  id: number;
  currentFemmeDeMenage = new FemmeDeMenage()
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
    this.service.findFemmeDeMenageById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.updateForm.patchValue({
        nom: event.nom,
        prenom: event.prenom,
        email: event.email,
        adresse: event.adresse,
        mdp: event.mdp,
        telephone: event.telephone, });}); }
  updateFemmeDeMenage() {
    let data = this.updateForm.value;
    let femmeDM =new FemmeDeMenage(
      this.id,
      data.nom,
      data.prenom,
      data.email,
      data.mdp,
      data.adresse,
      data.telephone, );
    console.log(femmeDM);
    console.log(data);
    this.service.updateFemmeDeMenage(this.id,femmeDM).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/listFemmeDeMenage'])}); }


}
