import { provideRouter, RouterConfig } from '@angular/router';

import  { HomeComponent} from './components/home';
import  {ContactComponent} from './components/contact';
import  {FormComponent} from './components/form';


const routes: RouterConfig = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'form', component: FormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const appRouterProviders = [
  provideRouter(routes)
];