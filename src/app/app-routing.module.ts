import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './view/layout/base/base.component';

const routes: Routes = [
  
   { path: 'auth', loadChildren: () => import('./view/pages/auth/auth.module').then(m => m.AuthModule) }, 
   {
    path:'',
    component:BaseComponent,
    children:[
      { path: '', loadChildren: () => import('./view/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      
      { path: 'customer', loadChildren: () => import('./view/pages/customer/customer.module').then(m => m.CustomerModule) },

      { path: 'product', loadChildren: () => import('./view/pages/product/product.module').then(m => m.ProductModule) },

      { path: 'branch', loadChildren: () => import('./view/pages/branch/branch.module').then(m => m.BranchModule) },

      { path: 'store', loadChildren: () => import('./view/pages/store/store.module').then(m => m.StoreModule) },

      { path: 'employee', loadChildren: () => import('./view/pages/employee/employee.module').then(m => m.EmployeeModule) },

      { path: 'order', loadChildren: () => import('./view/pages/order/order.module').then(m => m.OrderModule) },

      { path: 'area', loadChildren: () => import('./view/pages/area/area.module').then(m => m.AreaModule) },

      { path: 'stock', loadChildren: () => import('./view/pages/stock/stock.module').then(m => m.StockModule) },    
    ]
   },
  
  
   { path: 'pos', loadChildren: () => import('./view/pages/pos/pos.module').then(m => m.PosModule) },
   {
    path:'**',
    redirectTo:''
    
   }

  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
