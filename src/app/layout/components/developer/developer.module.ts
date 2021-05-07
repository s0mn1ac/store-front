import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/shared/modules/core/core.module';
import { DeveloperComponent } from './components/developer.component';
import { DeveloperRoutingModule } from './developer-routing.module';

@NgModule({
    declarations: [
        DeveloperComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        DeveloperRoutingModule,
    ],
    providers: []
})
export class DeveloperModule {}
