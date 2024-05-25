import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Admin } from '../Entites/Admin.Entites';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isSousAdmin:boolean;
  IsloggedIn:boolean
  userDetails: any;
  isSuperAdminIn:boolean;
  constructor(private service:CrudService,private router:Router) { }
  ngOnInit(): void {
    this.userDetails = this.service.getUserDetails();
    this.IsloggedIn=this.service.isLoggedIn();
    this.isSuperAdminIn=this.service.isSuperAdminInIn();

    this.isSousAdmin=this.service.isSousAdmin();

}
ModifierRole(){
  let admin =new Admin(
    this.userDetails.id,
    this.userDetails.nom,
    this.userDetails.prenom,
    this.userDetails.email,
    this.userDetails.mdp, 
    this.userDetails.role="Sous-administrateur",
  
  );
  if(confirm("Voulez-vous passer en mode propriétaire ?")) {
   console.log(admin)
    this.service.updateAdmin(this.userDetails.id,admin).subscribe(() => {
      localStorage.clear()
      this.router.navigate(['/Login']).then(() => {
        window.location.reload()
      })
    })
 
}}



logout(){
  console.log("logout");
  localStorage.clear()
  this.router.navigate(['/']).then(() => {
    window.location.reload()
  })
  
}
}
