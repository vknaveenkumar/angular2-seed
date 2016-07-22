import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: 'app/views/boot.html',
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
  title = 'This is  Main Components';
}
