import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  showAddress:boolean;
  lblAddress: string;
  

  constructor() { }

  ngOnInit(): void {
    this.showAddress = false;
    this.lblAddress = "Show Address";
  }
  toggleAddress(): void {
    this.showAddress = !this.showAddress;
    if(this.showAddress == true)
      this.lblAddress = "Hide Address";
    else
      this.lblAddress = "Show Address";
    
  }
}
