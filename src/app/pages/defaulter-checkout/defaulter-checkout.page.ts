import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-defaulter-checkout',
  templateUrl: './defaulter-checkout.page.html',
  styleUrls: ['./defaulter-checkout.page.scss'],
})
export class DefaulterCheckoutPage implements OnInit {

  myForm: FormGroup;


  constructor(private formsBuilder : FormBuilder) { 
    this.myForm = formsBuilder.group({
    'reason':['', Validators.compose([Validators.maxLength(50), Validators.minLength(20), Validators.required])],
  }); 
}

  ngOnInit() {
  }

}
