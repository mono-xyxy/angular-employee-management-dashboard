import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../api/employee.service';
import { Employee } from '../employee-interface/employee.interface'; // ⭐ FIXED

@Component({
  selector: 'app-edit-employee-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit-employee-details.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeDetailsComponent implements OnInit {

  form!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private empService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.empService.getEmployee(this.id).subscribe((res: Employee | undefined) => {
      if (res) {
        this.form.patchValue(res);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  update() {
    if (this.form.valid) {
      this.empService.updateEmployee(this.id, this.form.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}