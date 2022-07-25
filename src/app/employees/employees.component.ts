import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeserviceService } from '../services/employeeservice.service';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../entity/Employee';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  public ColumnNames: string[] = ['id', 'firstName', 'lastName','age','designation','Actions'];
  public employeeDetails: Employee[] = this.employeeList();
  isEditMode = false;

  constructor(private empservice:EmployeeserviceService, private router: Router) {

  }
    ngOnInit(): void {

  }
  employeeList(): Employee[] {
    return this.empservice.getAllEmployees();
  }
  updateEmployee(Employee:Employee):void{
    this.isEditMode = true;
    this.router.navigate(['/employee']);

    this.empservice.updateEmployee(Employee);
  }

  deleteEmployee(empId:string):void{
    console.log("delete .."+empId);
    this.empservice.deleteEmployee(empId);
    this.employeeDetails = this.employeeList();
    this.router.navigate(['/employees']);

  }
  addEmployee(Employee:Employee):void{
    this.empservice.updateEmployee(Employee);
  }
}


