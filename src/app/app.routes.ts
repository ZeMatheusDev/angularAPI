import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TesteComponent } from './teste/teste.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', component: TesteComponent}
];
