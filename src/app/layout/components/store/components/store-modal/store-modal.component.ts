import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/shared/services/common/app.service';
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

  constructor(private appService: AppService) { }

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
      await this.appService.storeService.addStore(this.store);
    } else {
      await this.appService.storeService.modifyStore(this.store);
    }
    this.appOnApplyChanges.emit();
    this.toggleDialog();
  }
  
  public onClickCancel(): void {
    this.toggleDialog();
  }

}
