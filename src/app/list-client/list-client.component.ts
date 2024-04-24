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
  constructor(private service:CrudService,private router:Router ) { }
  ngOnInit(): void {
    this.service.getClient().subscribe(client => {
      this.listClient = client
    })
  }

}
