import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/shared/modules/core/core.module';
import { DeveloperComponent } from './components/developer.component';
import { DeveloperRoutingModule } from './developer-routing.module';
import { DeveloperModalComponent } from './components/developer-modal/developer-modal.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/shared/modules/primeng/primeng.module';

@NgModule({
    declarations: [
        DeveloperComponent,
        DeveloperModalComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        DeveloperRoutingModule,
        PrimengModule,
        FormsModule
    ],
    providers: []
})
export class DeveloperModule {}
