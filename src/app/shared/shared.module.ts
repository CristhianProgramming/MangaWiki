import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MenuComponent,
    BannerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[
    MenuComponent,
    BannerComponent,
    FooterComponent
  ]
})
export class SharedModule { }
