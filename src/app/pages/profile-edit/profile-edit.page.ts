import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {

  myForm: FormGroup;

  constructor(private formsBuilder : FormBuilder ) {
    this.myForm = formsBuilder.group({
      name: new FormControl(''),
      designation: new FormControl(''),
      reportingmanager: new FormControl(''),
      hardwarealloted: new FormControl(''),
      email: new FormControl(''),
      pic: new FormControl(''),
      addr: new FormControl(''),
      mobile: new FormControl(''),
    });
  }

btnClicked(){
console.log('ok');
}
  onSubmit() {
    console.log(this.myForm.value);
  }

  ngOnInit() {
  }

}
