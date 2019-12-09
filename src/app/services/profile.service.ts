import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid= "7b899207af07181b05f9";
  private clientsecret = "8b42448f26c30f915588a13a121be17dded8e13c";

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
