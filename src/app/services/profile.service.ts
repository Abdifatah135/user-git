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
}
