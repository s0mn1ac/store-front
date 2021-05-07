import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/shared/modules/core/core.module';
import { StoreComponent } from './components/store.component';
import { StoreRoutingModule } from './store-routing.module';
import { StoreModalComponent } from './components/store-modal/store-modal.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/shared/modules/primeng/primeng.module';

@NgModule({
    declarations: [
        StoreComponent,
        StoreModalComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        StoreRoutingModule,
        PrimengModule,
        FormsModule
    ],
    providers: []
})
export class StoreModule {}
