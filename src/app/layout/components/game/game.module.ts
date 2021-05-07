import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/shared/modules/core/core.module';
import { GameComponent } from './components/game.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
    declarations: [
        GameComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        GameRoutingModule,
    ],
    providers: []
})
export class GameModule {}
