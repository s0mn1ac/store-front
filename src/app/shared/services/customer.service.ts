import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/layout/components/customer/models/customer.model';
import { BaseService } from './common/base.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService {

    private url = 'http://localhost:8090/customer';
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    // constructor(private http: HttpClient, private router: Router) { }

    public getAllCustomers(): Promise<Customer[]> {
        return this.serviceGet({
            url: this.url,
            headers: this.httpHeaders,
            callback: (response: any) => this.convertCustomersFromReport(response?.body),
            result: null
        });
    }

    public addCustomer(customer: Customer): Promise<Customer[]> {
        return this.servicePost({
            url: this.url,
            params: customer,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

    public modifyCustomer(customer: Customer): Promise<Customer[]> {
        return this.servicePut({
            url: `${this.url}/${customer.id}`,
            params: customer,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

    public deleteCustomer(customer: Customer): Promise<Customer[]> {
        return this.serviceDelete({
            url: `${this.url}/${customer.id}`,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

    private convertCustomersFromReport(report: any[]): Customer[] {

        const customers: Customer[] = [];
    
        report?.forEach((reportItem: any) => {
    
          const customer: Customer = new Customer();
    
          customer.id = reportItem.id;
          customer.name = reportItem.name;
          customer.lastname = reportItem.lastname;
          customer.document = reportItem.document;
          customer.email = reportItem.email;
          customer.birthdate = new Date(reportItem.birthdate);
    
          customers.push(customer);
    
        });
    
        return customers;

    }

}
