import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../Entites/Admin.Entites';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifer-admin',
  templateUrl: './modifer-admin.component.html',
  styleUrls: ['./modifer-admin.component.css']
})
export class ModiferAdminComponent
 {
  updateForm: FormGroup;
  id: number;
  currentAdmin = new Admin()
  userFile: any;
  public imagePath: any;
  imgURL: any = '';
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
      role: new FormControl('', [Validators.required]),
     
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
  get role() {
    return this.updateForm.get('role');
  }



  ngOnInit(): void {
    let idEvent = this.router.snapshot.params['id'];
    this.id = idEvent;
    this.service.findAdminById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.updateForm.patchValue({
        nom: event.nom,
        prenom: event.prenom,
        email: event.email,
        mdp: event.mdp,
        role: event.role, });}); }
  updateAdmin() {
    let data = this.updateForm.value;
    let admin =new Admin(
      this.id,
      data.nom,
      data.prenom,
      data.email,
      data.mdp,
      data.role, 
);
    console.log(admin);
    console.log(data);
    this.service.updateAdmin(this.id,admin).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/listAdmin'])}); }
}
