import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(private http:HttpClient ) {

    }

    getLocation():Observable<any>{
      return this.http.get<any>('http://ip-api.com/json/24.48.0.1');
    }

    getCountry():Observable<any>{
      return this.http.get<any>('https://api.covid19api.com/countries');
  }
  getCountryData(name:any):Observable<any>{
    return this.http.get<any>('https://api.covid19api.com/dayone/country/'+name);
  }
}
