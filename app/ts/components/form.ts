import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES,Router } from '@angular/router';
import { NgForm }    from '@angular/common';



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

  submit(){
    console.log(this.info)
  	console.log("submitted")
   this.router.navigate(['/home']);
  }
}
