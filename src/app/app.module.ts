import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfilComponent } from './profil/profil.component';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import { VrificationComponent } from './vrification/vrification.component';
import { ModifierprofilComponent } from './modifierprofil/modifierprofil.component';
@NgModule({
  declarations: [
    AppComponent,
    AjouterAdminComponent,
    ListAdminComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ModiferAdminComponent,
    AjouterClientComponent,
    ListClientComponent,
    ModifierClientComponent,
    AjouterAnnonceurComponent,
    ListAnnonceurComponent,
    ModifierAnnonceurComponent,
    AjouterFemmeDeMenageComponent,
    ListFemmeDeMenageComponent,
    ModifierFemmeDeMenageComponent,
    AjouterCategorieComponent,
    ListCategorieComponent,
    ModifierCategorieComponent,
    ListContactComponent,
    ListPlanificationComponent,
    LoginComponent,
    HomeComponent,
    ProfilComponent,
    AjouterUtilisateurComponent,
    ListUtilisateurComponent,
    ModifierUtilisateurComponent,
    VrificationComponent,
    ModifierprofilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule, 
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
