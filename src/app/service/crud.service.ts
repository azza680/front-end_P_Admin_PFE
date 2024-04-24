import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Entites/Admin.Entites';
import  {Observable, catchError} from 'rxjs';
import { Client } from '../Entites/Client.Entites';
import { Annonceur } from '../Entites/Annonceur.Entites';
import { Contact } from '../Entites/Contact.Entites';
import { FemmeDeMenage } from '../Entites/FemmeDeMenage.Entites';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Utilisateur } from '../Entites/Utilisateur.Entites';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  
  helper=new JwtHelperService()
  apiUrl="http://localhost:8081/api"
  loginUserUrl="http://localhost:8081/api/Admin/Login"

  constructor(private http:HttpClient) { }

//AdminCrud
  addAdmin(admin:Admin)
   {
    return this.http.post<any>(this.apiUrl+"/Admin",admin);
   }
   onDeleteAdmin(id : number){
    const url =`${this.apiUrl+"/Admin"}/${id}` 
    return this.http.delete(url)
  }
  getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl + "/Admin");
  }
  loginAdmin(admin:Admin){
    return this.http.post<any>(this.loginUserUrl, admin);
  }
  updateAdmin(id:number,admin: Admin) {
    const url = `${this.apiUrl+"/Admin"}/${id}`
    return this.http.put<any>(url, admin);
  }
  findAdminById(id : number): Observable<Admin> {
    const url =`${this.apiUrl+"/Admin"}/${id}`
    return this.http.get<Admin>(url)
  }
  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  
//ClientCrud
  addClient(client:Client)
   {
    return this.http.post<any>(this.apiUrl+"/Client",client);
   }
   onDeleteClient(id : number){
    const url =`${this.apiUrl+"/Client"}/${id}` 
    return this.http.delete(url)
  }
  getClient(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl + "/Client");
  }
  updateClient(id:number,client: Client) {
    const url = `${this.apiUrl+"/Client"}/${id}`
    return this.http.put<any>(url, client);
  }
  findClientById(id : number): Observable<Client> {
    const url =`${this.apiUrl+"/Client"}/${id}`
    return this.http.get<Client>(url)
  }
  userDetails(){
    let token:any=localStorage.getItem('myToken');
    let decodeToken= this.helper.decodeToken(token);
     return decodeToken.data;
   }
   
//AnnonceurCrud
  addAnnonceur(annonceur:Annonceur)
   {
    return this.http.post<any>(this.apiUrl+"/Annonceur",annonceur);
   }
   onDeleteAnnonceur(id : number){
    const url =`${this.apiUrl+"/Annonceur"}/${id}` 
    return this.http.delete(url)
  }
  getAnnonceur(): Observable<Annonceur[]>{
    return this.http.get<Annonceur[]>(this.apiUrl + "/Annonceur");
  }
  updateAnnonceur(id:number,annonceur: Annonceur) {
    const url = `${this.apiUrl+"/Annonceur"}/${id}`
    return this.http.put<any>(url, annonceur);
  }
  findAnnonceurById(id : number): Observable<Annonceur> {
    const url =`${this.apiUrl+"/Annonceur"}/${id}`
    return this.http.get<Annonceur>(url)
  }
  
//ContactCrud
  onDeleteContact(id : number){
    const url =`${this.apiUrl+"/Contact"}/${id}` 
    return this.http.delete(url)
  }
  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiUrl + "/Contact");
  }

//FemmeDeMenageCrud
  addFemmeDM(femmeDM:FemmeDeMenage)
   {
    return this.http.post<any>(this.apiUrl+"/FemmeDeMenage",femmeDM);
   }
   onDeleteFemmeDM(id : number){
    const url =`${this.apiUrl+"/FemmeDeMenage"}/${id}` 
    return this.http.delete(url)
  }
  getFemmeDM(): Observable<FemmeDeMenage[]>{
    return this.http.get<FemmeDeMenage[]>(this.apiUrl + "/FemmeDeMenage");
  }
  findFemmeDeMenageById(id : number): Observable<FemmeDeMenage> {
    const url =`${this.apiUrl+"/FemmeDeMenage"}/${id}`
    return this.http.get<FemmeDeMenage>(url)
  }
  updateFemmeDeMenage(id:number,femmeDM: FemmeDeMenage) {
    const url = `${this.apiUrl+"/FemmeDeMenage"}/${id}`
    return this.http.put<any>(url, femmeDM);
  }
//UtilisateurCrud
  addUtilisateur(utilisateur:Utilisateur)
   {
    return this.http.post<any>(this.apiUrl+"/Utilisateur",utilisateur);
   }
  loginUtilisateur(utilisateur:Utilisateur){
    return this.http.post<any>(this.loginUserUrl, utilisateur);
  }
  onDeleteUtilisateur(id : number){
    const url =`${this.apiUrl+"/Utilisateur"}/${id}` 
    return this.http.delete(url)
  }
  getUtilisateur(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.apiUrl + "/Utilisateur");
  }
  updateUtilisateur(id:number,annonceur: Utilisateur) {
    const url = `${this.apiUrl+"/Utilisateur"}/${id}`
    return this.http.put<any>(url, annonceur);
  }
  findUtilisateurById(id : number): Observable<Utilisateur> {
    const url =`${this.apiUrl+"/Utilisateur"}/${id}`
    return this.http.get<Utilisateur>(url)
  }
  ajouterPhotoDeProfil(userId: number, photo: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('photo', photo, photo.name);
    return this.http.post<any>(`${this.apiUrl}/Utilisateur/${userId}/photo`, formData)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de l\'ajout de la photo de profil : ', error);
          throw error;
        })
      );
  }
 

}
