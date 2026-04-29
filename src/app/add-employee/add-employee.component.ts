import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // ✅ combine import
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../api/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule], // ⭐ ADD RouterModule
  templateUrl: './add-employee.component.html',
  styleUrls:['./add-employee.component.css']
})
export class AddEmployeeComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    console.log("CLICK WORKING ✅");

    if (this.form.valid) {
      this.empService.addEmployee(this.form.value).subscribe(() => {
        console.log("NAVIGATING BACK");
        this.router.navigate(['/']); // ✅ go back to list
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}