import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoryEnum } from 'src/app/shared/enums/category.enum';
import { StatusEnum } from 'src/app/shared/enums/status.enum';
import { AppService } from 'src/app/shared/services/common/app.service';
import { Messages } from 'src/app/shared/utils/messages.config';
import { Customer } from '../../../customer/models/customer.model';
import { Game } from '../../../game/components/models/game.model';
import { Store } from '../../../store/models/store.model';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {

  @Output() appOnApplyChanges: EventEmitter<void> = new EventEmitter<void>();
  
  public isDialogVisible = false;
  public isNewOrder!: boolean;

  public order: Order = new Order();

  public customers!: Customer[];
  public games!: Game[];
  public stores!: Store[];

  public status!: any[];
  public categories!: any[];

  public statusSelected!: any;
  public categorySelected!: any;

  constructor(private appService: AppService, private messageService: MessageService) {

    this.status = [
      { name: 'Alquiler', status: StatusEnum.RENT, value: 0, disabled: false },
      { name: 'Compra', status: StatusEnum.BUY, value: 1, disabled: false },
      { name: 'Devolución', status: StatusEnum.RETURN, value: 2, disabled: false }
    ];

    this.categories = [
      { name: 'Acción', category: CategoryEnum.ACTION, value: 0 },
      { name: 'Arcade', category: CategoryEnum.ARCADE, value: 1 },
      { name: 'Deportes', category: CategoryEnum.SPORT, value: 2 },
      { name: 'Estrategia', category: CategoryEnum.STRATEGY, value: 3 },
      { name: 'Simulación', category: CategoryEnum.SIMULATION, value: 4 },
      { name: 'Musical', category: CategoryEnum.MUSICAL, value: 5 },
      { name: 'Shooter', category: CategoryEnum.SHOOTER, value: 6 },
      { name: 'Aventuras', category: CategoryEnum.ADVENTURE, value: 7 },
      { name: 'Rol', category: CategoryEnum.ROL, value: 8 },
      { name: 'Carreras', category: CategoryEnum.RACING, value: 9 }
    ];
  }

  ngOnInit(): void { }

  private toggleDialog(): void {
    this.isDialogVisible = !this.isDialogVisible;
  }

  private async getAllOrderData(): Promise<void> {
    this.customers = await this.appService.customerService.getAllCustomers();
    this.games = await this.appService.gameService.getAllGames();
    this.stores = await this.appService.storeService.getAllStores();
  }

  public addOrder(): void {

    this.getAllOrderData();

    this.order = new Order();
    this.statusSelected = {};
    this.status.find((status: any) => status.status === StatusEnum.RENT).disabled = false;
    this.status.find((status: any) => status.status === StatusEnum.BUY).disabled = false;
    this.status.find((status: any) => status.status === StatusEnum.RETURN).disabled = true;
    this.isNewOrder = true;
    this.toggleDialog();
  }

  public modifyOrder(order: Order): void {

    this.getAllOrderData();

    this.order = new Order();

    this.order.id = order.id;
    this.order.reference = order.reference;
    this.order.status = order.status;
    this.order.customer = order.customer;
    this.order.game = order.game;
    this.order.store = order.store;

    this.statusSelected = this.status.find((status: any) => status.status === StatusEnum.RETURN);

    this.isNewOrder = false;
    this.onClickApply();
  }

  public async onClickApply(): Promise<void> {

    this.categorySelected = this.categories.find((category: any) => category.category === this.order.game.category);

    this.order.game.category = this.categorySelected.value;
    this.order.status = this.statusSelected.value;

    if (this.isNewOrder) {
      await this.appService.orderService.addOrder(this.order).then(() => {
        this.appOnApplyChanges.emit();
        this.messageService.add({severity: 'success', summary: Messages.ITEM_ADDED_TITLE, detail: Messages.ITEM_ADDED});
        this.toggleDialog();
      }).catch((error) => this.messageService.add({severity: 'error', summary: Messages.ERROR_TITLE, detail: error.error.errorMessage}));
    } else {
      await this.appService.orderService.modifyOrder(this.order).then(() => {
        this.appOnApplyChanges.emit();
        this.messageService.add({severity: 'info', summary: Messages.ORDER_RETURN_TITLE, detail: Messages.ORDER_RETURN});
      }).catch((error) => this.messageService.add({severity: 'error', summary: Messages.ERROR_TITLE, detail: error.error.errorMessage}));
    }
  }

  public onClickCancel(): void {
    this.toggleDialog();
  }

}
