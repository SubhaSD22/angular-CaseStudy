import { Injectable } from '@angular/core';
import { Employee } from '../entity/Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
public employees;
  public get employeeList(): Employee[] {
    return this.employees;
  }
  public set employeeList(value: Employee[]) {
    this.employees = value;
  }
getAllEmployees():Employee[]{
  return this.employees;
}
addEmployee(employee:Employee){
 console.log("Hi here");
  this.employees.push(employee);

}
updateEmployee(employee:Employee){
  return this.employees.push(employee);
}
deleteEmployee(empId:string){
this.employees=this.employees.filter(employee=>employee.id !=empId);
}
  constructor( ) {
    this.employees= this._employeeList;
  }

  public _employeeList:Employee[] = [
    {
      "id": "Emp1",
      "firstName": "FS01",
      "lastName": "g",
      "age": 29,
      "designation": "Trainee"
    },
    {
      "id": "Emp2",
      "firstName": "FS02",
      "lastName": "g",
      "age": 29,
      "designation": "Trainee"
    }
  ];
}
