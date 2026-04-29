import { Routes } from '@angular/router';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeDetailsComponent } from './edit-employee-details/edit-employee-details.component';

export const routes: Routes = [
  { path: '', component: ViewEmployeesComponent },
  { path: 'add', component: AddEmployeeComponent }, // ⭐ REQUIRED
  { path: 'edit/:id', component: EditEmployeeDetailsComponent }
];