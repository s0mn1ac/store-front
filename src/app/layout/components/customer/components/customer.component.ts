import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/shared/services/common/app.service';
import { Customer } from '../models/customer.model';
import { CustomerModalComponent } from './customer-modal/customer-modal.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @ViewChild('customerModal') customerModal!: CustomerModalComponent;

  public customers!: any[];

  constructor(private appService: AppService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  public async getAllCustomers(): Promise<void> {
    this.customers = await this.appService.customerService.getAllCustomers();
  }

  public async deleteCustomer(customer: Customer): Promise<void> {
    await this.appService.customerService.deleteCustomer(customer);
    this.messageService.add({key: 'bc', severity:'info', detail: 'Registro borrado con éxito'});
    this.getAllCustomers();
  }

  public onClickAddCustomer(): void {
    this.customerModal.addCustomer();
  }

  public onClickModifyCustomer(customer: Customer): void {
    this.customerModal.modifyCustomer(customer);
  }
  
  public onClickDeleteCustomer(customer: Customer): void {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas eliminar el registro seleccionado?',
      accept: () => {
        this.deleteCustomer(customer);
      }
    });
  }

}
