import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [],
  exports: [
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    ConfirmDialogModule,
    ToastModule,
    MultiSelectModule,
    DropdownModule,
    InputNumberModule
  ]
})
export class PrimengModule { }
