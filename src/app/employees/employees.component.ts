import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeserviceService } from '../services/employeeservice.service';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../entity/Employee';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  public ColumnNames: string[] = ['id', 'firstName', 'lastName','age','designation','Actions'];
  public employeeDetails: Employee[] = this.employeeList();
  constructor(private empservice:EmployeeserviceService) {

  }
    ngOnInit(): void {

  }
  employeeList(): Employee[] {
    return this.empservice.getAllEmployees();
  }
  updateEmployee(Employee:Employee):void{
    this.empservice.updateEmployee(Employee);
  }
  deleteEmployee(empId:string):void{
    console.log("delete .."+empId);
    this.empservice.deleteEmployee(empId);
  }
  addEmployee(Employee:Employee){
    this.empservice.updateEmployee(Employee);
  }
}


