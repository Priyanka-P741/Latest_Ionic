import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,public storage:Storage) {}
  ngOnInit() {
    this.resetLocalStorage();
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  navigateToRegistration(){
    this.router.navigate(['/register']);
  }

  resetLocalStorage(){
       this.storage.clear();
  }
}
