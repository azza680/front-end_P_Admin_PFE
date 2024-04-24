import { Component } from '@angular/core';
import { Client } from '../Entites/Client.Entites';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent 
{
  listClient: Client[];
  p:number=1;
  collection:any[]
  constructor(private service:CrudService,private router:Router ) { }
  //supprimer
  Deleteclient(client: Client){
    if(confirm("Voulez vous supprimer cet client avec l'ID " + client.id + " ?")) {
      this.service.onDeleteClient(client.id).subscribe(() => {
        this.router.navigate(['/listClient']).then(() => {
          window.location.reload()
        })
      })
   
  }
}
  ngOnInit(): void {
    this.service.getClient().subscribe(client => {
      this.listClient = client
    })
  }

}

