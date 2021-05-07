import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/shared/modules/core/core.module';
import { StoreComponent } from './components/store.component';
import { StoreRoutingModule } from './store-routing.module';

@NgModule({
    declarations: [
        StoreComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        StoreRoutingModule,
    ],
    providers: []
})
export class StoreModule {}
