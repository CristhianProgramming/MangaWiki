import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component:HomeComponent},
            { path: 'anime/:id', component: DetailsComponent },
            { path: 'manga/:id', component: DetailsComponent },
            {path: 'catalogo/:hoja' , component:CatalogoComponent},

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentRoutingModule { }
