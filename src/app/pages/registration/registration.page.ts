import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  btnClicked(){
    // alert('btn clicked')
    this.router.navigate(['main-page']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
