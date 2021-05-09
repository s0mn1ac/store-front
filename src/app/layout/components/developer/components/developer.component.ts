import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppService } from 'src/app/shared/services/common/app.service';
import { Developer } from '../models/developer.model';
import { DeveloperModalComponent } from './developer-modal/developer-modal.component';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  @ViewChild('developerModal') developerModal!: DeveloperModalComponent;

  public developers!: Developer[];

  constructor(private appService: AppService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllDevelopers();
  }

  public async getAllDevelopers(): Promise<void> {
    this.developers = await this.appService.developerService.getAllDevelopers();
  }

  public async deleteDeveloper(developer: Developer): Promise<void> {
    await this.appService.developerService.deleteDeveloper(developer);
    this.messageService.add({severity: 'info', summary: 'Registro eliminado', detail: 'El registro ha sido eliminado correctamente de la base de datos'});
    this.getAllDevelopers();
  }

  public onClickAddDeveloper(): void {
    this.developerModal.addDeveloper();
  }

  public onClickModifyDeveloper(developer: Developer): void {
    this.developerModal.modifyDeveloper(developer);
  }
  
  public onClickDeleteDeveloper(developer: Developer): void {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas eliminar el registro seleccionado?',
      accept: () => {
        this.deleteDeveloper(developer);
      }
    });
  }

}
