import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/shared/services/common/app.service';
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

  constructor(private appService: AppService) { }

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
      await this.appService.developerService.addDeveloper(this.developer);
    } else {
      await this.appService.developerService.modifyDeveloper(this.developer);
    }
    this.appOnApplyChanges.emit();
    this.toggleDialog();
  }
  
  public onClickCancel(): void {
    this.toggleDialog();
  }

}
