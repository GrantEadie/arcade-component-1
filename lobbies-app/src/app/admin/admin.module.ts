import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [AdminComponent, AdminRoutingModule.components],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
