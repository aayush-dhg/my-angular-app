import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  getAllVendorsApi: string;

  constructor(private http: HttpClient) {
    this.getAllVendorsApi ='http://localhost:7047/vendor';
   }

  fetchVendors() : Observable<Vendor[]>{
    return this.http.get<Vendor[]>(this.getAllVendorsApi);
  }
}