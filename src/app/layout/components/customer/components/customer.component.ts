import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';
import { Customer } from '../models/customer.model';
import { CustomerModalComponent } from './customer-modal/customer-modal.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {

  @ViewChild('customerModal') customerModal!: CustomerModalComponent;

  public customers!: any[];

  private getAllCustomers$!: Subscription;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getAllCustomers();
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

  public getAllCustomers(): void {
    this.cancelSubscriptions();
    this.getAllCustomers$ = this.appService.customerService.getAllCustomers().subscribe(
      customers => {
        this.customers = this.convertCustomersFromReport(customers);
      }
    );
  }

  public onClickModifyCustomer(customer: Customer): void {
    this.customerModal.modifyCustomer(customer);
  }
  
  public onClickDeleteCustomer(customer: Customer): void {
  }

  private cancelSubscriptions(): void {
    if (this.getAllCustomers$ != null) {
      this.getAllCustomers$.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.cancelSubscriptions();
  }

}
