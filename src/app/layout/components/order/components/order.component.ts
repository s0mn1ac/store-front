import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppService } from 'src/app/shared/services/common/app.service';
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

  public async deleteOrder(order: Order): Promise<void> {
    await this.appService.orderService.deleteOrder(order);
    this.messageService.add({severity: 'info', summary: 'Registro eliminado', detail: "El registro ha sido eliminado correctamente de la base de datos"});
    this.getAllOrders();
  }

  public onClickAddOrder(): void {
    this.orderModal.addOrder();
  }

  public onClickModifyOrder(order: Order): void {
    this.orderModal.modifyOrder(order);
  }
  
  public onClickDeleteOrder(order: Order): void {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas eliminar el registro seleccionado?',
      accept: () => {
        this.deleteOrder(order);
      }
    });
  }

}
