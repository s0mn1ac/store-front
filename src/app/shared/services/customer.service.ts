import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Customer } from 'src/app/layout/components/customer/models/customer.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    private url = 'http://localhost:8090/customer';
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient, private router: Router) { }

    public getAllCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.url, {headers: this.httpHeaders}).pipe(
            catchError(error => {
                console.log(error)
                return throwError(error);
            })
        );
    }

    public modifyCustomer(customer: Customer): Observable<Customer> {
        return this.http.put<Customer>(`${this.url}/${customer.id}`, customer, {headers: this.httpHeaders}).pipe(
            catchError(error => {
                console.log(error)
                return throwError(error);
            })
        );
    }

}
