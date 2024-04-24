import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  totalAdmins: number = 0;
  totalClients: number = 0;
  totalFemmeDMs: number = 0;
  totalAnnonceurs: number = 0;
  message: string;
  userDetails: any;
  constructor(private router: Router, private service: CrudService) {
    this.userDetails = this.service.userDetails();
     const heureActuelle = new Date().getHours();
    this.message = heureActuelle >= 17 ? 'Bonsoir' : 'Bonjour';

    this.service.getAdmin().subscribe(admin => {
      this.totalAdmins = admin.length;
    });

    this.service.getClient().subscribe(client => {
      this.totalClients = client.length;
    });

    this.service.getAdmin().subscribe(femmeDM => {
      this.totalFemmeDMs = femmeDM.length;
    });

    this.service.getAdmin().subscribe(annonceur => {
      this.totalAnnonceurs = annonceur.length;
    });
  }
}
