import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Entites/Admin.Entites';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  userDetails: Admin;
  profil: Admin[] = [];
  p: number = 1;
  collection: any[] 
  admin: any; // Utiliser le type Admin pour la variable admin

  constructor(private router: Router, private service: CrudService) {
    this.userDetails = this.service.userDetails();
    console.log(this.userDetails); 
  }

  Deleteadmin(admin: Admin) {
    if(confirm("Voulez-vous supprimer votre compte ?")) {
      this.service.onDeleteAdmin(admin.id).subscribe(() => {
        this.router.navigate(['/profil']).then(() => {
          window.location.reload();
        });
      });
    }
  }

  ngOnInit(): void {
    console.log(this.userDetails);
    this.service.getAdmin().subscribe(admins => {
      this.profil = admins.filter(user => user.id === this.userDetails.id);
    });
  }
 
  logout(): void {
    console.log("logout");
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  modifierProfil(id: number): void {
    this.router.navigate(['/modifierprofil', id]);
  }
}
