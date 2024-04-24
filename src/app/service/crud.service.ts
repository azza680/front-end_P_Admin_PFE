import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Entites/Admin.Entites';
import  {Observable} from 'rxjs';
import { Client } from '../Entites/Client.Entites';
import { Annonceur } from '../Entites/Annonceur.Entites';
import { Contact } from '../Entites/Contact.Entites';
import { FemmeDeMenage } from '../Entites/FemmeDeMenage.Entites';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl="http://localhost:8081/api"
  loginUserUrl="http://localhost:8081/api/Admin/Login"

  constructor(private http:HttpClient) { }


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

  onDeleteContact(id : number){
    const url =`${this.apiUrl+"/Contact"}/${id}` 
    return this.http.delete(url)
  }
  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiUrl + "/Contact");
  }


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
}
