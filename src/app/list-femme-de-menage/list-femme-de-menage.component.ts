import { Component } from '@angular/core';
import { FemmeDeMenage } from '../Entites/FemmeDeMenage.Entites';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-femme-de-menage',
  templateUrl: './list-femme-de-menage.component.html',
  styleUrls: ['./list-femme-de-menage.component.css']
})
export class ListFemmeDeMenageComponent {
  listFemmeDeMenage: FemmeDeMenage[];
  constructor(private service:CrudService,private router:Router ) { }
  //supprimer
  DeletefemmeDM(femmeDM: FemmeDeMenage){
    if(confirm("Voulez vous supprimer femme de menage avec l'ID " + femmeDM.id + " ?")) {
     
      this.service.onDeleteFemmeDM(femmeDM.id).subscribe(() => {
        this.router.navigate(['/listFemmeDeMenage']).then(() => {
          window.location.reload()
        })
      })
   
  }
}
  ngOnInit(): void {
    this.service.getFemmeDM().subscribe(femmeDM => {
      this.listFemmeDeMenage = femmeDM
    })
  }
}
