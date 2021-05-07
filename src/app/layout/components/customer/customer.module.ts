import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/shared/modules/core/core.module';
import { PrimengModule } from 'src/app/shared/modules/primeng/primeng.module';
import { CustomerComponent } from './components/customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerModalComponent } from './components/customer-modal/customer-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CustomerComponent,
        CustomerModalComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        CustomerRoutingModule,
        PrimengModule,
        FormsModule
    ],
    providers: []
})
export class CustomerModule {}
