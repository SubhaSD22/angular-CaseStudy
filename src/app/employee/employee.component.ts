import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeserviceService } from '../services/employeeservice.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Employee } from '../entity/Employee';


@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {
    constructor(private empservice :EmployeeserviceService,
      private router: Router) {
  }

  ngOnInit(): void {

  }
  onSubmit(Form:NgForm){
      this.addEmployee(Form.value);
   }
  addEmployee(employee:NgForm ): void {
    console.log(employee.value);
    this.empservice.addEmployee(new Employee(employee.value.id,
      employee.value.firstName,employee.value.lastName,
      employee.value.age,employee.value.designation));
      this.router.navigate(['/employees']);

  }
}
