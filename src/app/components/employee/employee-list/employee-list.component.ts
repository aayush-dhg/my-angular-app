import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list-rxjs',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponentRxjs implements OnInit {

  employees: Employee[];
  
  page: number;
  constructor(private employeeService: EmployeeService ) { }

  ngOnInit(): void {
    this.employeeService.employee$.subscribe(data=>{
      this.employees = data;
    });
  }
  prev(){
    // read the value of page from subject
    let page = this.employeeService.page$.getValue();
    if(page >0){
      this.page = page -1;
      this.employeeService.page$.next(this.page);
    }
    
    
  }
  next(){
    let page = this.employeeService.page$.getValue();
    this.page = page + 1;
    this.employeeService.page$.next(this.page);
  }

}

