import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/users.model';
import { EmployeeService } from '../services/users.service';
//import { Employee } from '../users.model';
//import { EmployeeService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public employees!: Employee[];
  private employeeServ3: EmployeeService

  constructor(
    private empService: EmployeeService,
    private empService2: EmployeeService,
  ) {

    this.employeeServ3 = new EmployeeService();
   }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(
      employees => this.employees = employees
    );

    console.log("Test1:", this.empService === this.empService2);
    console.log("Test2:", this.empService === this.employeeServ3);
  }

}
