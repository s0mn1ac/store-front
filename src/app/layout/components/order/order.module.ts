import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/shared/modules/core/core.module';
import { OrderComponent } from './components/order.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
    declarations: [
        OrderComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        OrderRoutingModule,
    ],
    providers: []
})
export class OrderModule {}
