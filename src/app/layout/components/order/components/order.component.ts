import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppService } from 'src/app/shared/services/common/app.service';
import { Messages } from 'src/app/shared/utils/messages.config';
import { Order } from './models/order.model';
import { OrderModalComponent } from './order-modal/order-modal.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @ViewChild('orderModal') orderModal!: OrderModalComponent;

  public orders!: Order[];

  constructor(private appService: AppService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  public async getAllOrders(): Promise<void> {
    this.orders = await this.appService.orderService.getAllOrders();
  }

  public onClickAddOrder(): void {
    this.orderModal.addOrder();
  }

  public onClickModifyOrder(order: Order): void {
    this.confirmationService.confirm({
      message: Messages.ORDER_RETURN_CONFIRMATION,
      accept: () => {
        this.orderModal.modifyOrder(order);
      }
    });
  }

}
