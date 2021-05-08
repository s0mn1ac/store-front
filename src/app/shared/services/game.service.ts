import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from 'src/app/layout/components/game/components/models/game.model';
import { BaseService } from './common/base.service';

@Injectable({
  providedIn: 'root'
})
export class GameService extends BaseService {

    private url = 'http://localhost:8090/game';
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    public getAllGames(): Promise<Game[]> {
        return this.serviceGet({
            url: this.url,
            headers: this.httpHeaders,
            callback: (response: any) => this.convertGamesFromReport(response?.body),
            result: null
        });
    }

    public addGame(game: Game): Promise<void> {
        return this.servicePost({
            url: this.url,
            params: game,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

    public modifyGame(game: Game): Promise<Game> {
        return this.servicePut({
            url: `${this.url}/${game.id}`,
            params: game,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

    public deleteGame(game: Game): Promise<void> {
        return this.serviceDelete({
            url: `${this.url}/${game.id}`,
            headers: this.httpHeaders,
            callback: (response: any) => response?.body,
            result: null
        });
    }

}
