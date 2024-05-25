import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Entites/Admin.Entites';
import  {Observable, catchError} from 'rxjs';
import { Contact } from '../Entites/Contact.Entites';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Utilisateur } from '../Entites/Utilisateur.Entites';
import { Annonce } from '../Entites/Annonce.Entites';
import { SaveAnnonce } from '../Entites/SaveAnnonce.Entites';
import { Reservation } from '../Entites/Reservation.Entites';
import { ReservationFM } from '../Entites/ReservationFM.Entites';

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
  getUserDetails(){
    let token:any=localStorage.getItem('myToken');
    let decodeToken= this.helper.decodeToken(token);
     return decodeToken.data;
   }
//ContactCrud
  onDeleteContact(id : number){
    const url =`${this.apiUrl+"/Contact"}/${id}` 
    return this.http.delete(url)
  }
  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiUrl + "/Contact");
  }
  updateContact(id:number,contact: Contact) {
    const url = `${this.apiUrl+"/Contact"}/${id}`
    return this.http.put<any>(url, contact);
  }
  getContactById(id : number): Observable<Contact> {
    const url =`${this.apiUrl+"/Contact"}/${id}`
    return this.http.get<Contact>(url)
  }
//UtilisateurCrud
  addUtilisateur(utilisateur:Utilisateur)
   {
    return this.http.post<any>(this.apiUrl+"/Utilisateur/register",utilisateur);
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
  
  userDetails(){
    let token:any=localStorage.getItem('myToken');
    let decodeToken= this.helper.decodeToken(token);
     return decodeToken.data;
   }
 
   onDeleteAnnonce(id : number){
    const url =`${this.apiUrl+"/Annonce"}/${id}`
    return this.http.delete(url)
  }
  getAnnonce(): Observable<Annonce[]>{
    return this.http.get<Annonce[]>(this.apiUrl +"/Annonce");
  }
  getUtilisateurByAnnonce(id:number):Observable<Utilisateur>{const url =`${this.apiUrl+"/Annonce/get-utilisateur"}/${id}`
  return this.http.get<any>(url);}
  listeAnnonceByAnnonceur(id:number):Observable<Utilisateur[]>{const url =`${this.apiUrl+"/Annonce/get-all-by-id-annonceur"}/${id}`
    return this.http.get<Utilisateur[]>(url);}

    getAnnonceById(id:number): Observable<Annonce>{
      return this.http.get<Annonce>(this.apiUrl + "/Annonce/"+id);
    }
    updateAnnonce(id:number,annonce:Annonce){
      const url = `${this.apiUrl+"/Annonce"}/${id}`
      return this.http.put<any>(url, annonce);
    }
    sendEmailAnnonceur(annonceur:Utilisateur)
    {
      return this.http.post<any>(this.apiUrl+"/Utilisateur/send_email", annonceur);
    }
    getUtilisateursParRole(role: string): Observable<Utilisateur[]> {
      return this.http.get<Utilisateur[]>(`${this.apiUrl}/Utilisateur/role`, { params: { role } });
    }
    getUserInfo() {
      var token = localStorage.getItem("myToken");
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      const expirationDate = helper.getTokenExpirationDate(token);
      const isExpired = helper.isTokenExpired(token);
      var decoded: any
      return decodedToken?.data
    }
        getReservation(): Observable<Reservation[]>{
      return this.http.get<Reservation[]>(this.apiUrl + "/Reservation");
    }
    getReservationFM(): Observable<ReservationFM[]>{
      return this.http.get<ReservationFM[]>(this.apiUrl + "/ReservationFM");
    }
    
    
 
  getUtilisateurByReservation(idClient: number): Observable<Utilisateur> {
    const url = `${this.apiUrl}/utilisateur/${idClient}`;
    return this.http.get<Utilisateur>(url);
  }

  // Opération de lecture de l'annonce par ID de réservation
  getAnnonceByReservation(idAnnonce: number): Observable<Annonce> {
    const url = `${this.apiUrl}/annonce/${idAnnonce}`;
    return this.http.get<Annonce>(url);
  }
  isSousAdmin(){

    let token = localStorage.getItem("role");
    
    if (token=="Sous-administrateur") {
      return true ;
    } else {
      return false;
    }
  }
  isSuperAdminInIn(){

    let token = localStorage.getItem("role");
    
    if (token=="SuperAdmin") {
      return true ;
    } else {
      return false;
    }
  }
  
}
