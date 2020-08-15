import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  btnClicked(){
    // alert('btn clicked')
    this.router.navigate(['main-page']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

}
