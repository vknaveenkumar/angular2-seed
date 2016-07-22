import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './js/components/boot';
import  {appRouterProviders} from './js/route';



bootstrap(AppComponent, [
  appRouterProviders
])
.catch(err => console.error(err));
