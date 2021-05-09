import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/shared/services/common/app.service';
import { Messages } from 'src/app/shared/utils/messages.config';
import { Customer } from '../models/customer.model';
import { CustomerModalComponent } from './customer-modal/customer-modal.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @ViewChild('customerModal') customerModal!: CustomerModalComponent;

  public customers!: Customer[];

  constructor(private appService: AppService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  public async getAllCustomers(): Promise<void> {
    this.customers = await this.appService.customerService.getAllCustomers();
  }

  public async deleteCustomer(customer: Customer): Promise<void> {
    await this.appService.customerService.deleteCustomer(customer);
    this.messageService.add({severity: 'info', summary: Messages.ITEM_DELETED_TITLE, detail: Messages.ITEM_DELETED});
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
      message: Messages.ITEM_DELETE_CONFIRMATION,
      accept: () => {
        this.deleteCustomer(customer);
      }
    });
  }

}
