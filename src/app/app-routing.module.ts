import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/components/layout.component';

const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
          {
            path: 'customer',
            loadChildren: () => import('./layout/components/customer/customer.module').then(m => m.CustomerModule)
          },
          {
            path: 'developer',
            loadChildren: () => import('./layout/components/developer/developer.module').then(m => m.DeveloperModule)
          },
          {
            path: 'game',
            loadChildren: () => import('./layout/components/game/game.module').then(m => m.GameModule)
          },
          {
            path: 'order',
            loadChildren: () => import('./layout/components/order/order.module').then(m => m.OrderModule)
          },
          {
            path: 'store',
            loadChildren: () => import('./layout/components/store/store.module').then(m => m.StoreModule)
          },
          {
            path: '',
            redirectTo: '/customer',
            pathMatch: 'full'
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
