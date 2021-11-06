import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../model/users.model';
import { EmployeeService } from '../services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() employee_id! :number;
  mon_employee!: Employee;

  constructor(
    private empService : EmployeeService
  ) { }

  ngOnInit(): void {
    this.empService.getEmployeeById(this.employee_id).subscribe(
      employee => this.mon_employee = employee
    );
  }

}
