import { Routes, RouterModule } from '@angular/router';

import  { HomeComponent} from './ts/components/home';
import  {ContactComponent} from './ts/components/contact';
import  {FormComponent} from './ts/components/form';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'form', component: FormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);