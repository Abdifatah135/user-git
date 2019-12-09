import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid= "1c11515f882584fa245b";
  private clientsecret = "9e72dfe575fbdaf3125ad65ee73aa6b210057b4d";

  constructor(private http:HttpClient) { 
     
    this.username= "Abdifatah135"
  }
  getProfileInfo(){

    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }
  getProfileRepos(){

    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }
  updateProfile(username:string){ 
    this.username = username;

  }

  
}
