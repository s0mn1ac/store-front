import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/shared/modules/core/core.module';
import { PrimengModule } from 'src/app/shared/modules/primeng/primeng.module';
import { GameComponent } from './components/game.component';
import { GameRoutingModule } from './game-routing.module';
import { GameModalComponent } from './components/game-modal/game-modal.component';

@NgModule({
    declarations: [
        GameComponent,
        GameModalComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        GameRoutingModule,
        PrimengModule,
        FormsModule
    ],
    providers: []
})
export class GameModule {}
