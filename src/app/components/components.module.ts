import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecomendationsComponent } from './pages/recomendations/recomendations.component';
import { CardsComponent } from './pages/cards/cards.component';
import { TitlepipePipe } from './pipes/titlepipe.pipe';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ComponentRoutingModule } from './components-routing.modules';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecomendationsComponent,
    CardsComponent,
    TitlepipePipe,
    HomeComponent,
    DetailsComponent,
    CatalogoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentRoutingModule,
    ReactiveFormsModule
  ],
  exports:[RecomendationsComponent,HomeComponent,DetailsComponent]
})
export class ComponentsModule { }
