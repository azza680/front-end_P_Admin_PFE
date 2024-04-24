import { Component } from '@angular/core';
import { Contact } from '../Entites/Contact.Entites';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent {
  listContact: Contact[];
  p:number=1;
  collection:any[]
  constructor(private service:CrudService,private router:Router ) { }
  //supprimer
  Deletecontact(contact: Contact){
    if(confirm("Voulez vous supprimer cet contact avec l'ID " + contact.id + " ?")) {
     
      this.service.onDeleteContact(contact.id).subscribe(() => {
        this.router.navigate(['/listContact']).then(() => {
          window.location.reload()
        })
      })
   
  }
}
  ngOnInit(): void {
    this.service.getContact().subscribe(contact => {
      this.listContact = contact
    })
  }
}
