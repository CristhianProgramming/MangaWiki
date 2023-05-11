import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecomendationsComponent } from './pages/recomendations/recomendations.component';
import { CardsComponent } from './pages/cards/cards.component';
import { TitlepipePipe } from './pipes/titlepipe.pipe';



@NgModule({
  declarations: [
    RecomendationsComponent,
    CardsComponent,
    TitlepipePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[RecomendationsComponent]
})
export class ComponentsModule { }
