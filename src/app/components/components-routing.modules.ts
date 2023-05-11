import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component:HomeComponent},
            { path: 'anime/:id', component: DetailsComponent },
            { path: 'manga/:id', component: DetailsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentRoutingModule { }
