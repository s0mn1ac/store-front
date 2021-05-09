import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppService } from 'src/app/shared/services/common/app.service';
import { Messages } from 'src/app/shared/utils/messages.config';
import { GameModalComponent } from './game-modal/game-modal.component';
import { Game } from './models/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('gameModal') gameModal!: GameModalComponent;

  public games!: Game[];

  constructor(private appService: AppService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAllGames();
  }

  public async getAllGames(): Promise<void> {
    this.games = await this.appService.gameService.getAllGames();
  }

  public async deleteGame(game: Game): Promise<void> {
    await this.appService.gameService.deleteGame(game);
    this.messageService.add({severity: 'info', summary: Messages.ITEM_DELETED_TITLE, detail: Messages.ITEM_DELETED});
    this.getAllGames();
  }

  public onClickAddGame(): void {
    this.gameModal.addGame();
  }

  public onClickModifyGame(game: Game): void {
    this.gameModal.modifyGame(game);
  }
  
  public onClickDeleteGame(game: Game): void {
    this.confirmationService.confirm({
      message: Messages.ITEM_DELETE_CONFIRMATION,
      accept: () => {
        this.deleteGame(game);
      }
    });
  }

}
