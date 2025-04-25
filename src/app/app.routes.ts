import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  // index route to show welcome / home page
  {
    path: '',
    component: HomeComponent,
  },
  // error route to handle programmatic redirect on invalid URL params
  {
    path: 'error',
    component: ErrorComponent,
  },
  // city filter route
  {
    path: ':city',
    component: DetailsComponent,
  },
  // city and program filter route
  {
    path: ':city/:program',
    component: DetailsComponent,
  },
  // city, program and category filter route
  {
    path: ':city/:program/:category',
    component: DetailsComponent,
  },
  // catchall route to show no route matched error
  {
    path: '**',
    component: ErrorComponent,
  },
];
