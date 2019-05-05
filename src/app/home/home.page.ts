import { Component } from '@angular/core';
import { Router } from  "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  logform = {email:"",pass:""};
  constructor(private router: Router) {}
  login(){
    if ((this.logform.email == "admin@admin") &&(this.logform.pass == "123")) {
      this.router.navigateByUrl('/accueil'); 
    }
    else{
      alert ("Email ou mot de passe incorrect ...");
    }
  }
}
