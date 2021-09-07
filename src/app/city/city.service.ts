import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  SERVER_URL = 'http://localhost:9091';
  ADD_CITY = "add-city";
  EDIT_CITY = "edit-city";
  CITY_LIST = "city-list";
  GET_CITY = "city";
  AUTHENTICATE = "authenticate";
  
  constructor(private http: HttpClient) { }
  login(loginPayload: any) : Observable<any> {
    return this.http.post<any>(`${this.SERVER_URL}/${this.AUTHENTICATE}`, loginPayload);
  }

  //add city post method with Observable
  addCity(cityName: string, cityDetails: string): Observable<any> {
    const obj = {
      name: cityName,
      details: cityDetails
    };
    console.log(obj);
    return this.http.post<any>(`${this.SERVER_URL}/${this.ADD_CITY}`, obj);
  }

  editCity(id: string, cityName: string, cityDetails: string) {
    const obj = {
      id: id,
      name: cityName,
      details: cityDetails
    };
    console.log(obj);
    this.http.post(`${this.SERVER_URL}/${this.EDIT_CITY}/${id}`, obj)
        .subscribe(res => console.log('Done'));
  }

  cityList(): Observable<any>  {    
    return this.http.get<any>(`${this.SERVER_URL}/${this.CITY_LIST}`);        
  }

  getCity(id : any): Observable<any>  {
    return this.http.get<any>(`${this.SERVER_URL}/${this.GET_CITY}/${id}`);
  }
}
