import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES,Router } from '@angular/router';




@Component({
  templateUrl: 'app/views/form.html',
})

export class FormComponent {

  constructor(private router:Router){

  }

  title = 'Welcome to Angular2';
  info:any={

  	name:"",
  	age:""
  };

  enter(){
    console.log(this.info)
  	console.log("submitted")
   this.router.navigate(['/home']);
  }
}
