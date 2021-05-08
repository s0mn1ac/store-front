import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppService } from 'src/app/shared/services/common/app.service';
import { Store } from '../models/store.model';
import { StoreModalComponent } from './store-modal/store-modal.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  @ViewChild('storeModal') storeModal!: StoreModalComponent;

  public stores!: Store[];

  constructor(private appService: AppService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllStores();
  }

  public async getAllStores(): Promise<void> {
    this.stores = await this.appService.storeService.getAllStores();
  }

  public async deleteStore(store: Store): Promise<void> {
    await this.appService.storeService.deleteStore(store);
    this.messageService.add({key: 'bc', severity:'info', detail: 'Registro borrado con éxito'});
    this.getAllStores();
  }

  public onClickAddStore(): void {
    this.storeModal.addStore();
  }

  public onClickModifyStore(store: Store): void {
    this.storeModal.modifyStore(store);
  }
  
  public onClickDeleteStore(store: Store): void {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas eliminar el registro seleccionado?',
      accept: () => {
        this.deleteStore(store);
      }
    });
  }

}
