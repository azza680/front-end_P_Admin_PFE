import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Contact } from '../Entites/Contact.Entites';
import { Admin } from '../Entites/Admin.Entites';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  totalContacts: number = 0;
  userDetails: any;
  listContact: Contact[];
  isSousAdmin:boolean;
  IsloggedIn:boolean
  
  isSuperAdminIn:boolean;

  constructor(private router: Router, private service: CrudService) {
    this.userDetails = this.service.userDetails(); 
    this.service.getContact().subscribe(contact => {
      this.totalContacts = contact.length;
    });
    this.userDetails = this.service.getUserDetails();
    this.IsloggedIn=this.service.isLoggedIn();
    this.isSuperAdminIn=this.service.isSuperAdminInIn();

    this.isSousAdmin=this.service.isSousAdmin();
  }

  ngOnInit(): void {
    console.log(this.userDetails);
    this.service.getContact().subscribe(contact => {
      this.listContact = contact;
    });
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
  logout(): void {
    console.log("logout");
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }
}
