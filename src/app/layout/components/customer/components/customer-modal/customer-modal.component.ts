import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CalendarProperties } from 'src/app/shared/models/calendar-properties.model';
import { AppService } from 'src/app/shared/services/common/app.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.scss']
})
export class CustomerModalComponent implements OnInit {

  @Output() appOnApplyChanges: EventEmitter<void> = new EventEmitter<void>();
  
  public isDialogVisible = false;
  public isNewCustomer!: boolean;

  public customer: Customer = new Customer();

  public calendarProperties!: CalendarProperties;

  constructor(private appService: AppService, private messageService: MessageService) {
    this.calendarProperties = new CalendarProperties('es');
  }

  ngOnInit(): void { }

  private toggleDialog(): void {
    this.isDialogVisible = !this.isDialogVisible;
  }

  public addCustomer(): void {
    this.customer = new Customer();
    this.isNewCustomer = true;
    this.toggleDialog();
  }

  public modifyCustomer(customer: Customer): void {

    this.customer = new Customer();

    this.customer.id = customer.id;
    this.customer.name = customer.name;
    this.customer.lastname = customer.lastname;
    this.customer.birthdate = customer.birthdate;
    this.customer.email = customer.email;
    this.customer.document = customer.document;

    this.isNewCustomer = false;
    this.toggleDialog();
  }

  public async onClickApply(): Promise<void> {
    if (this.isNewCustomer) {
      await this.appService.customerService.addCustomer(this.customer).then(() => {
        this.appOnApplyChanges.emit();
        this.messageService.add({severity: 'success', summary: 'Nuevo registro añadido', detail: "El registro ha sido añadido correctamente a la base de datos"});
        this.toggleDialog();
      }).catch((error) => this.messageService.add({severity: 'error', summary: 'Error', detail: error.error.errorMessage}));
    } else {
      await this.appService.customerService.modifyCustomer(this.customer).then(() => {
        this.appOnApplyChanges.emit();
        this.messageService.add({severity: 'success', summary: 'Registro actualizado', detail: "El registro ha sido actualizado correctamente"});
        this.toggleDialog();
      }).catch((error) => this.messageService.add({severity: 'error', summary: 'Error', detail: error.error.errorMessage}));
    }
  }
  
  public onClickCancel(): void {
    this.toggleDialog();
  }

}
