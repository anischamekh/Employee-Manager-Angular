import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class Employee {
  id: number;
  name: string;
  email: string;
  jobTitle: string;
  phone: string;
  imageUrl: string;
  birthDate: Date = new Date();
  hiringDate: Date = new Date();
  salary: number;
  employeeCode: string;
}  


@Injectable({providedIn: 'root'})
export class HttpClientService {

  constructor(private httpClient: HttpClient){}

  public getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`http://localhost:8080/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`http://localhost:8080/employee/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`http://localhost:8080/employee/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:8080/employee/delete/${employeeId}`);
  }

  getHeaders(){
    let username=''
    let password=''
  
    let  basicString='Basic '+window.btoa(username + ':' + password)
    return basicString;
  }
}
