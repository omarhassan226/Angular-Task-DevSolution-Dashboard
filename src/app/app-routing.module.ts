import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'module1', loadChildren: () => import('./modules/module1/module1.module').then(m => m.Module1Module) },
  // { path: 'module2', loadChildren: () => import('./modules/module2/module2.module').then(m => m.Module2Module) },
  // { path: 'module3', loadChildren: () => import('./modules/module3/module3.module').then(m => m.Module3Module) },
  // { path: 'module4', loadChildren: () => import('./modules/module4/module4.module').then(m => m.Module4Module) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders.module').then((m) => m.OrdersModule),
  },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
