import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoryEnum } from 'src/app/shared/enums/category.enum';
import { CalendarProperties } from 'src/app/shared/models/calendar-properties.model';
import { AppService } from 'src/app/shared/services/common/app.service';
import { Messages } from 'src/app/shared/utils/messages.config';
import { Developer } from '../../../developer/models/developer.model';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.component.html',
  styleUrls: ['./game-modal.component.scss']
})
export class GameModalComponent implements OnInit {

  @Output() appOnApplyChanges: EventEmitter<void> = new EventEmitter<void>();
  
  public isDialogVisible = false;
  public isNewGame!: boolean;

  public game: Game = new Game();
  public developers!: Developer[];
  public categories!: any[];
  public categorySelected!: any;

  public calendarProperties!: CalendarProperties;

  constructor(private appService: AppService, private messageService: MessageService) {
    this.calendarProperties = new CalendarProperties('es');

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

  private async getAllDevelopers(): Promise<void> {
    this.developers = await this.appService.developerService.getAllDevelopers();
  }

  public addGame(): void {

    this.getAllDevelopers();

    this.game = new Game();
    this.categorySelected = {};
    this.isNewGame = true;
    this.toggleDialog();
  }

  public modifyGame(game: Game): void {

    this.getAllDevelopers();

    this.game = new Game();

    this.game.id = game.id;
    this.game.title = game.title;
    this.game.category = game.category;
    this.game.launch = game.launch;
    this.game.pegi = game.pegi;
    this.game.stock = game.stock;
    this.game.developers = game.developers;

    this.categorySelected = this.categories.find((category: any) => category.category === game.category);

    this.isNewGame = false;
    this.toggleDialog();
  }

  public async onClickApply(): Promise<void> {

    this.game.category = this.categorySelected.value;
    this.game.stock = this.game.stock ? this.game.stock : 0;

    if (this.isNewGame) {
      await this.appService.gameService.addGame(this.game).then(() => {
        this.appOnApplyChanges.emit();
        this.messageService.add({severity: 'success', summary: Messages.ITEM_ADDED_TITLE, detail: Messages.ITEM_ADDED});
        this.toggleDialog();
      }).catch((error) => this.displayErrors(error));
    } else {
      await this.appService.gameService.modifyGame(this.game).then(() => {
        this.appOnApplyChanges.emit();
        this.messageService.add({severity: 'success', summary: Messages.ITEM_MODIFIED_TITLE, detail: Messages.ITEM_MODIFIED});
        this.toggleDialog();
      }).catch((error) => this.displayErrors(error));
    }
  }
  
  public onClickCancel(): void {
    this.toggleDialog();
  }

  private displayErrors(error: any): void {
    if (error.error.errorMessage) {
      this.messageService.add({severity: 'error', summary: Messages.ERROR_TITLE, detail: error.error.errorMessage});
    } else if (error.error.valids?.length > 0) {
      error.error.valids?.forEach((validError: string) => {
        this.messageService.add({severity: 'error', summary: Messages.ERROR_TITLE, detail: validError});
      });
    } else {
      this.messageService.add({severity: 'error', summary: Messages.ERROR_TITLE, detail: Messages.ERROR_UNEXPECTED});
    }
  }

}
