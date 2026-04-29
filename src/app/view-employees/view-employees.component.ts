import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../api/employee.service';
import { Router, RouterModule } from '@angular/router'; // ✅ FIX

@Component({
  selector: 'app-view-employees',
  standalone: true, // ⭐ REQUIRED
  imports: [CommonModule, RouterModule], // ⭐ REQUIRED
  templateUrl: './view-employees.component.html',
  styleUrl:'./view-employee.component.css'
})
export class ViewEmployeesComponent implements OnInit {

  employees: any[] = [];

  constructor(
    private empService: EmployeeService,
    private router: Router // ✅ FIX
  ) {}

  ngOnInit() {
    this.empService.getEmployees().subscribe(res => {
      this.employees = res;
    });
  }

  delete(id: number) {
    this.empService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(e => e.id !== id);
    });
  }

  edit(id: number) {
    this.router.navigate(['/edit', id]); // ✅ FIX
  }
}