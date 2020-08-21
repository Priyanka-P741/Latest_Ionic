import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-defaulter-reason',
  templateUrl: './defaulter-reason.page.html',
  styleUrls: ['./defaulter-reason.page.scss'],
})
export class DefaulterReasonPage implements OnInit {

  myForm: FormGroup;z


  constructor(private formsBuilder : FormBuilder) { 
    this.myForm = formsBuilder.group({
    'reason':['', Validators.compose([Validators.maxLength(50), Validators.minLength(20), Validators.required])],
  }); 
}

  ngOnInit() {
  }

}
