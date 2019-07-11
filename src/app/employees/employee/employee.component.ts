import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(employeeForm: NgForm) {
    this.employeeService.insertEmployee(employeeForm.value);
    this.resetForm(employeeForm);
    this.toastr.success('Submitted Successfully', 'Employee Register');
  }

  resetForm(employeeForm: NgForm) {
    this.employeeService.selectedEmployee = {
      $key: null,
      name : '',
      position : '',
      office : '',
      salary : 0
    };
  }
}
