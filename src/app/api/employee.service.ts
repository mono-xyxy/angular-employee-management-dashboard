import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: any[] = [];

  // ⭐ Observable state
  private employees$ = new BehaviorSubject<any[]>([]);

  constructor() {}

  // ✅ Get employees
  getEmployees() {
    return this.employees$.asObservable();
  }

  // ✅ Add employee
  addEmployee(data: any) {
    const newEmployee = {
      id: Date.now(), // unique id
      ...data
    };

    this.employees.push(newEmployee);
    this.employees$.next(this.employees);

    return {
      subscribe: (cb: any) => cb(newEmployee)
    };
  }

  // ✅ Delete employee
  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
    this.employees$.next(this.employees);

    return {
      subscribe: (cb: any) => cb()
    };
  }

  // ✅ Get single employee
  getEmployee(id: number) {
    const emp = this.employees.find(e => e.id === id);

    return {
      subscribe: (cb: any) => cb(emp)
    };
  }

  // ✅ Update employee
  updateEmployee(id: number, data: any) {
    this.employees = this.employees.map(e =>
      e.id === id ? { ...e, ...data } : e
    );

    this.employees$.next(this.employees);

    return {
      subscribe: (cb: any) => cb()
    };
  }
}