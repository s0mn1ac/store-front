import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarProperties } from 'src/app/shared/models/calendar-properties.model';
import { AppService } from 'src/app/shared/services/app.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.scss']
})
export class CustomerModalComponent implements OnInit {

  @Output() appOnApplyChanges: EventEmitter<void> = new EventEmitter<void>();
  
  public isDialogVisible = false;

  public customer: Customer = new Customer();

  public calendarProperties!: CalendarProperties;

  constructor(private appService: AppService, private router: Router) {
    this.calendarProperties = new CalendarProperties('es');
  }

  ngOnInit(): void { }

  private toggleDialog(): void {
    this.isDialogVisible = !this.isDialogVisible;
  }

  public modifyCustomer(customer: Customer): void {

    this.customer = new Customer();

    this.customer.id = customer.id;
    this.customer.name = customer.name;
    this.customer.lastname = customer.lastname;
    this.customer.birthdate = customer.birthdate;
    this.customer.email = customer.email;
    this.customer.document = customer.document;

    this.toggleDialog();
  }

  public onClickApply(): void {
    this.appService.customerService.modifyCustomer(this.customer).subscribe(
      customer => {
        this.appOnApplyChanges.emit();
        this.toggleDialog();
      }
    );
  }
  
  public onClickCancel(): void {
    this.toggleDialog();
  }

}
