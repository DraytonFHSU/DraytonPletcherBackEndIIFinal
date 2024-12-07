import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {path: 'home-component', component: HomeComponent},
    {path: 'header-component', component: HeaderComponent}
];