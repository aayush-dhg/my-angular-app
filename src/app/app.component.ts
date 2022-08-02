import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee.model';
import { EmployeeService } from './service/employee.service';
import { AuthService } from './auth/service/auth.service';
import { employeeData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private employeeService: EmployeeService,
              private authService: AuthService) {
  }
  employees: Employee[];
  username: string;

  ngOnInit(): void { 
    this.employees = this.employeeService.fetchEmployees();
    this.authService.username$.subscribe(data=>{
      this.username = data;
      console.log(this.username);

    })
    
  }
}
