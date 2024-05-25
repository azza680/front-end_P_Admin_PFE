import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from '../Entites/Admin.Entites';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-modifierprofil',
  templateUrl: './modifierprofil.component.html',
  styleUrls: ['./modifierprofil.component.css']
})
export class ModifierprofilComponent {

  updateForm: FormGroup;
  id: number;
  currentAdmin = new Admin()
  userFile: any;
  public imagePath: any;
  imgURL: any = '';
  userDetails: any;
  public message!: string;
  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private route: Router,
    private router: ActivatedRoute
  ) {
    this.userDetails = this.service.getUserInfo();
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
    photo: ['']
     
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
  get photo (){return this.updateForm.get('photo');}

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
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
        role: event.role});}); }
  updateAdmin() {
    let data = this.updateForm.value;
    let admin =new Admin(
      this.id,
      data.nom,
      data.prenom,
      data.email,
      data.mdp,
      data.role, 
    this.imgURL);
    console.log("image : ", this.imgURL)
    console.log("admin",admin);
    console.log("data",data);
    this.service.updateAdmin(this.id,admin).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/profil'])}); }
}

