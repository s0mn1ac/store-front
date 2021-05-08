import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/shared/modules/core/core.module';
import { PrimengModule } from 'src/app/shared/modules/primeng/primeng.module';
import { OrderComponent } from './components/order.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderModalComponent } from './components/order-modal/order-modal.component';

@NgModule({
    declarations: [
        OrderComponent,
        OrderModalComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        OrderRoutingModule,
        PrimengModule,
        FormsModule
    ],
    providers: []
})
export class OrderModule {}
