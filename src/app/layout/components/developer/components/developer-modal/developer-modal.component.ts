import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppService } from 'src/app/shared/services/common/app.service';
import { Messages } from 'src/app/shared/utils/messages.config';
import { Developer } from '../../models/developer.model';

@Component({
  selector: 'app-developer-modal',
  templateUrl: './developer-modal.component.html',
  styleUrls: ['./developer-modal.component.scss']
})
export class DeveloperModalComponent implements OnInit {

  @Output() appOnApplyChanges: EventEmitter<void> = new EventEmitter<void>();
  
  public isDialogVisible = false;
  public isNewDeveloper!: boolean;

  public developer: Developer = new Developer();

  constructor(private appService: AppService, private messageService: MessageService) { }

  ngOnInit(): void { }

  private toggleDialog(): void {
    this.isDialogVisible = !this.isDialogVisible;
  }

  public addDeveloper(): void {
    this.developer = new Developer();
    this.isNewDeveloper = true;
    this.toggleDialog();
  }

  public modifyDeveloper(developer: Developer): void {

    this.developer = new Developer();

    this.developer.id = developer.id;
    this.developer.name = developer.name;
    this.developer.cif = developer.cif;

    this.isNewDeveloper = false;
    this.toggleDialog();
  }

  public async onClickApply(): Promise<void> {
    if (this.isNewDeveloper) {
      await this.appService.developerService.addDeveloper(this.developer).then(() => {
        this.appOnApplyChanges.emit();
        this.messageService.add({severity: 'success', summary: Messages.ITEM_ADDED_TITLE, detail: Messages.ITEM_ADDED});
        this.toggleDialog();
      }).catch((error) => this.messageService.add({severity: 'error', summary: Messages.ERROR_TITLE, detail: error.error.errorMessage}));
    } else {
      await this.appService.developerService.modifyDeveloper(this.developer).then(() => {
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
