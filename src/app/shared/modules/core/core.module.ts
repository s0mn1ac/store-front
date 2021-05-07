import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { LayoutComponent } from 'src/app/layout/components/layout.component';
import { AppService } from '../../services/app.service';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    FormsModule
  ],
  providers: [],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<any> {
      return {
          ngModule: CoreModule,
          providers: [AppService]
      };
  }
}
