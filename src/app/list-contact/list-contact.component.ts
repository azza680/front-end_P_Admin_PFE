import { Component, ElementRef, ViewChild } from '@angular/core';
import { Contact } from '../Entites/Contact.Entites';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent {
  @ViewChild('exampleModal') exampleModal: ElementRef;
  listContact: Contact[];
  contact : Contact;
  p:number=1;
  id: number;
  updateForm: FormGroup;
  collection:any[]
  constructor(private fb: FormBuilder,private service:CrudService,private router:Router, private route: ActivatedRoute ) 
  { 
    let formControles = {
      repondre: new FormControl('', [Validators.required]),
      
    };
    this.updateForm = this.fb.group(formControles); 
  }

  get repondre() {
    return this.updateForm.get('repondre');
  }
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
selectContact(contact: Contact): void {
  this.contact = contact;  // Set the active annonce
}
updateContact(contact1: Contact) {
  let data = this.updateForm.value;
  let contact =new Contact(
    contact1.id,
    contact1.email,
    contact1.sujet,
    contact1.msg,
    contact1.telephone,
    data.repondre,
    contact1.date);
  console.log(Contact);
  console.log(data);
  this.service.updateContact(contact1.id,contact).subscribe((res) => {
    console.log(res);
    this.router.navigate(['/listContact']).then(() => {
      window.location.reload();
    })
  })}

  ngOnInit(): void {
   
    

          this.service.getContact().subscribe(contact => {
            this.listContact = contact
          })
        
        }
   
   
         
  }

