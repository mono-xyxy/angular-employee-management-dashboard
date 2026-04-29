# 🚀 Employee Management System (Angular)

A modern **Employee Management Dashboard** built using Angular, demonstrating core frontend concepts such as **CRUD operations, routing, reactive forms, and state management**.

---

## 📸 Screenshots

| Employee List                                                                                                                       | Add Employee                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| <img width="1847" height="718" alt="image" src="https://github.com/user-attachments/assets/a7cba28e-81e7-4487-b754-72941a6072f8" /> | <img width="1814" height="929" alt="image" src="https://github.com/user-attachments/assets/2b917f4b-bb87-4758-bd4d-75bb34b6a552" /> |

| Edit Employee                                                                                                                       | Empty State                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| <img width="1806" height="923" alt="image" src="https://github.com/user-attachments/assets/f8c5f56e-8b1e-4ec7-a468-ec583c3a2151" /> | <img width="1817" height="892" alt="image" src="https://github.com/user-attachments/assets/7d405545-ce4b-454d-bad7-b93574c5abbb" /> |

---

## ✨ Features

* View employees in a structured dashboard
* Add new employees using reactive forms
* Edit existing employee details
* Delete employees
* Real-time UI updates using reactive state
* Empty state handling
* Modular and scalable project structure

---

## 🧠 Concepts Covered

* Angular Standalone Components
* Reactive Forms & Validation
* Routing & Navigation
* Services & Dependency Injection
* State Management using BehaviorSubject
* Component-based architecture
* TypeScript interfaces for type safety

---

## 🏗️ Project Structure

```bash
src/app
│── add-employee/               # Add employee form
│── edit-employee-details/      # Edit employee form
│── view-employees/             # Employee dashboard
│── api/
│   └── employee.service.ts     # Business logic & state management
│── employee-interface/
│   └── employee.interface.ts   # Type definitions
│── app.config.ts               # App configuration
│── app.routes.ts               # Routing setup
```

---

## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/mono-xyxy/angular-employee-management-dashboard.git
cd angular-employee-management-dashboard
```

### Install dependencies

```bash
npm install
```

### Run the application

```bash
ng serve
```

Open in browser:

```
http://localhost:4200/
```

---

## 🧪 Application Behavior

* Employees are managed using an **in-memory state (BehaviorSubject)**
* CRUD operations update the UI instantly without backend dependency
* Routing enables navigation between list, add, and edit views

---

## ⚠️ Note

* This project currently uses **local state only (no backend)**
* Data will reset on page refresh
* Can be extended with backend integration (REST API / Firebase)

---

## 🚀 Possible Enhancements

* Backend integration for persistent storage
* Authentication and role-based access
* Search and filtering functionality
* Dashboard analytics
* UI enhancement using Angular Material
* LocalStorage-based persistence

---

## 📌 Summary

A clean and scalable Angular application demonstrating practical frontend development skills including component architecture, state management, and user interaction workflows.
