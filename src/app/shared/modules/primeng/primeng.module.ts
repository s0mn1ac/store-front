import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  exports: [
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class PrimengModule { }
