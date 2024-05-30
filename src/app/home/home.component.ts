import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { Annonce } from '../Entites/Annonce.Entites';

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
    title = 'ng-chart';
    chart: any = [];
    listeAnnonce: Annonce[] = [];
  totalannonce: number = 0;
  constructor(private router: Router, private service: CrudService) {
    Chart.register(...registerables);
    this.userDetails = this.service.userDetails();
     const heureActuelle = new Date().getHours();
    this.message = heureActuelle >= 17 ? 'Bonsoir' : 'Bonjour';

    this.service.getAdmin().subscribe(admin => {
      this.totalAdmins = admin.length;
    });

    this.service.getUtilisateursParRole("Réservateur").subscribe(client => {
      this.totalClients = client.length;
    });

    this.service.getUtilisateursParRole("Femme de menage").subscribe(femmeDM => {
      this.totalFemmeDMs = femmeDM.length;
    });
    this.service.getUtilisateursParRole("Propriétaire").subscribe(annonceur => {
      this.totalAnnonceurs = annonceur.length;
    });

  }
  updateChart(nombreannoncesConfirme: number, nombreTotalannonces: number) {
    const circleChart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ["Annonces vérifier ", "Annonces en attente"],
        datasets: [{
          label: 'Statistiques des Annonces',
          data: [nombreannoncesConfirme, nombreTotalannonces - nombreannoncesConfirme],
          backgroundColor: [
            '#ff8a65', // Couleur pour les salles actives
            '#8B65D2'    // Couleur pour les salles inactives
          ],
          borderColor: [
            '#ff8a65',
            '#8B65D2'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                family: 'Arial',
                size: 14
              }
            }
          },
          title: {
            display: true,
            text: 'Statistiques des Annonces',
            font: {
              family: 'Arial',
              size: 18,
              weight: 'bold'
            }
          }
        },
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
          }
        }
      }
    });
  }
  // Méthode pour mettre à jour le graphique des pourcentages de clients, coachs, et salles de sport
  updatePercentageChart() {
    const totalUsers = this.totalClients + this.totalFemmeDMs + this.totalAnnonceurs;

    const percentageClients = (this.totalClients / totalUsers) * 100;
    const percentageFemmeDMs  = (this.totalFemmeDMs / totalUsers) * 100;
    const percentageAnnonceurs = (this.totalAnnonceurs / totalUsers) * 100;

    const percentageChart = new Chart('percentageCanvas', {
      type: 'pie',
      data: {
        labels: ["Clients", "Femme de ménage", "Annonceurs"],
        datasets: [{
          label: 'Pourcentage des utilisateurs',
          data: [percentageClients, percentageFemmeDMs, percentageAnnonceurs],
          backgroundColor: ['#ff8a65', '#4bc0c0', '#8B65D2'],
          borderColor: ['#ff8a65', '#4bc0c0', '#8B65D2'],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                family: 'Arial',
                size: 14
              }
            }
          },
          title: {
            display: true,
            text: 'Pourcentage des utilisateurs sur la plateforme',
            font: {
              family: 'Arial',
              size: 18,
              weight: 'bold'
            }
          }
        },
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
          }
        }
      }
    });
  }
  ngOnInit(): void {
    // Récupérer les données des différentes catégories d'utilisateurs
    


    this.service.getAnnonce().subscribe(annonce => {
      this.totalannonce=annonce.length;
      this.listeAnnonce = annonce;

      // Filtrer les annonces de sport avec l'état true
      const annoncesConfirme = this.listeAnnonce.filter(annonce => annonce.verification === true);

      // Calculer le nombre de annonces de sport actives et inactives
      const nombreannoncesConfirme = annoncesConfirme.length;
      const nombreTotalannonces = this.listeAnnonce.length;

      // Mettre à jour les données du graphique circulaire
      this.updateChart(nombreannoncesConfirme, nombreTotalannonces);

      this.updatePercentageChart();
    });
  }
}