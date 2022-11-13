import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FeahterIconModule } from 'src/app/helper/feather-icon/feather-icon.module';
import { ContentAnimateDirective } from 'src/app/helper/content-animate/content-animate.directive';


@NgModule({
  declarations: [
    BaseComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ContentAnimateDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeahterIconModule
  ]
})
export class LayoutModule { }
