import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppService } from 'src/app/shared/services/common/app.service';
import { Messages } from 'src/app/shared/utils/messages.config';
import { Store } from '../../models/store.model';

@Component({
  selector: 'app-store-modal',
  templateUrl: './store-modal.component.html',
  styleUrls: ['./store-modal.component.scss']
})
export class StoreModalComponent implements OnInit {

  @Output() appOnApplyChanges: EventEmitter<void> = new EventEmitter<void>();
  
  public isDialogVisible = false;
  public isNewStore!: boolean;

  public store: Store = new Store();

  constructor(private appService: AppService, private messageService: MessageService) { }

  ngOnInit(): void { }

  private toggleDialog(): void {
    this.isDialogVisible = !this.isDialogVisible;
  }

  public addStore(): void {
    this.store = new Store();
    this.isNewStore = true;
    this.toggleDialog();
  }

  public modifyStore(store: Store): void {

    this.store = new Store();

    this.store.id = store.id;
    this.store.name = store.name;
    this.store.address = store.address;

    this.isNewStore = false;
    this.toggleDialog();
  }

  public async onClickApply(): Promise<void> {
    if (this.isNewStore) {
      await this.appService.storeService.addStore(this.store).then(() => {
        this.appOnApplyChanges.emit();
        this.messageService.add({severity: 'success', summary: Messages.ITEM_ADDED_TITLE, detail: Messages.ITEM_ADDED});
        this.toggleDialog();
      }).catch((error) => this.messageService.add({severity: 'error', summary: Messages.ERROR_TITLE, detail: error.error.errorMessage}));
    } else {
      await this.appService.storeService.modifyStore(this.store).then(() => {
        this.appOnApplyChanges.emit();
        this.messageService.add({severity: 'success', summary: Messages.ITEM_MODIFIED_TITLE, detail: Messages.ITEM_MODIFIED});
        this.toggleDialog();
      }).catch((error) => this.messageService.add({severity: 'error', summary: Messages.ERROR_TITLE, detail: error.error.errorMessage}));
    }
  }
  
  public onClickCancel(): void {
    this.toggleDialog();
  }

}
