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
import { AuthGuard } from './service/auth.service';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import { VrificationComponent } from './vrification/vrification.component';
import { ProfilComponent } from './profil/profil.component';
import { ModifierprofilComponent } from './modifierprofil/modifierprofil.component';
import { ListeannonceComponent } from './listeannonce/listeannonce.component';


const routes: Routes = [
  {path:'ajouterAdmin',component:AjouterAdminComponent,canActivate:[AuthGuard]},
  {path:'ajouterUtilisateur',component:AjouterUtilisateurComponent,canActivate:[AuthGuard]},
  {path:'listUtilisateur',component:ListUtilisateurComponent,canActivate:[AuthGuard]},
  {path:'listAdmin',component:ListAdminComponent,canActivate:[AuthGuard]},
  {path:'modifierAdmin/:id',component:ModiferAdminComponent,canActivate:[AuthGuard]},
  {path:'ajouterClient',component:AjouterClientComponent,canActivate:[AuthGuard]},
  {path:'listClient',component:ListClientComponent,canActivate:[AuthGuard]},
  {path:'modifierClient/:id',component:ModifierClientComponent,canActivate:[AuthGuard]},
  {path:'ajouterAnnonceur',component:AjouterAnnonceurComponent,canActivate:[AuthGuard]},
  {path:'listAnnonceur',component:ListAnnonceurComponent,canActivate:[AuthGuard]},
  {path:'modifierAnnonceur/:id',component:ModifierAnnonceurComponent,canActivate:[AuthGuard]},
  {path:'ajouterFemmeDeMenage',component:AjouterFemmeDeMenageComponent,canActivate:[AuthGuard]},
  {path:'listFemmeDeMenage',component:ListFemmeDeMenageComponent,canActivate:[AuthGuard]},
  {path:'modifierFemmeDeMenage/:id',component:ModifierFemmeDeMenageComponent,canActivate:[AuthGuard]},
  {path:'ajouterCategorie',component:AjouterCategorieComponent,canActivate:[AuthGuard]},
  {path:'listCategorie',component:ListCategorieComponent,canActivate:[AuthGuard]},
  {path:'modifierCategorie/:id',component:ModifierCategorieComponent,canActivate:[AuthGuard]},
  {path:'listContact',component:ListContactComponent,canActivate:[AuthGuard]},
  {path:'listplanification',component:ListPlanificationComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'modifierUtilisateur/:id',component:ModifierUtilisateurComponent,canActivate:[AuthGuard]},
  {path:'verification',component:VrificationComponent,canActivate:[AuthGuard]},
  {path:'profil',component:ProfilComponent},
  {path:'modifierprofil/:id',component:ModifierprofilComponent},
  {path:'listeannonce',component:ListeannonceComponent}


  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
