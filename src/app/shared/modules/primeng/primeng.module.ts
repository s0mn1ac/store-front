import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [],
  exports: [
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CalendarModule
  ]
})
export class PrimengModule { }
