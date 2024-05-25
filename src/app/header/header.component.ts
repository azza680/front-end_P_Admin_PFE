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
  userDetails: Admin;
  listContact: Contact[];

  constructor(private router: Router, private service: CrudService) {
    this.userDetails = this.service.userDetails(); 
    this.service.getContact().subscribe(contact => {
      this.totalContacts = contact.length;
    });
  }

  ngOnInit(): void {
    console.log(this.userDetails);
    this.service.getContact().subscribe(contact => {
      this.listContact = contact;
    });
  }

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
