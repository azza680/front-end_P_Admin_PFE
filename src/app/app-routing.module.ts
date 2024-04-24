import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ModiferAdminComponent } from './modifer-admin/modifer-admin.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { AjouterAnnonceurComponent } from './ajouter-annonceur/ajouter-annonceur.component';
import { ListAnnonceurComponent } from './list-annonceur/list-annonceur.component';
import { ModifierAnnonceurComponent } from './modifier-annonceur/modifier-annonceur.component';
import { AjouterFemmeDeMenageComponent } from './ajouter-femme-de-menage/ajouter-femme-de-menage.component';
import { ListFemmeDeMenageComponent } from './list-femme-de-menage/list-femme-de-menage.component';
import { ModifierFemmeDeMenageComponent } from './modifier-femme-de-menage/modifier-femme-de-menage.component';
import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ListPlanificationComponent } from './list-planification/list-planification.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:AjouterAdminComponent},
  {path:'listAdmin',component:ListAdminComponent},
  {path:'modifierAdmin',component:ModiferAdminComponent},
  {path:'ajouterClient',component:AjouterClientComponent},
  {path:'listClient',component:ListClientComponent},
  {path:'modifierClient',component:ModifierClientComponent},
  {path:'ajouterAnnonceur',component:AjouterAnnonceurComponent},
  {path:'listAnnonceur',component:ListAnnonceurComponent},
  {path:'modifierAnnonceur',component:ModifierAnnonceurComponent},
  {path:'ajouterFemmeDeMenage',component:AjouterFemmeDeMenageComponent},
  {path:'listFemmeDeMenage',component:ListFemmeDeMenageComponent},
  {path:'modifierFemmeDeMenage',component:ModifierFemmeDeMenageComponent},
  {path:'ajouterCategorie',component:AjouterCategorieComponent},
  {path:'listCategorie',component:ListCategorieComponent},
  {path:'modifierCategorie',component:ModifierCategorieComponent},
  {path:'listContact',component:ListContactComponent},
  {path:'listplanification',component:ListPlanificationComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
