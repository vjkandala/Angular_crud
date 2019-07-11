import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   employeeList: AngularFireList<any>;
   selectedEmployee: Employee = new Employee();
   constructor(private fireBase: AngularFireDatabase) { }

  getData() {
    this.employeeList = this.fireBase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee: Employee) {
    this.employeeList = this.fireBase.list('/employees');
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
  }

  // updateEmployee(employee: Employee) {
  //   this.employeeList.update(employee.$key, {
  //     name : employee.name,
  //     position : employee.position,
  //     office : employee.office,
  //     salary : employee.salary
  //   });
  // }

  deleteEmployee($key: string) {
    this.employeeList.remove($key);
  }
}

