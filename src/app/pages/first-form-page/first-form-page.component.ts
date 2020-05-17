import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-first-form-page',
  templateUrl: './first-form-page.component.html',
  styleUrls: ['./first-form-page.component.css']
})
export class FirstFormPageComponent implements OnInit {
  @ViewChild('f', { static: false }) submittedForm: NgForm;

  myOptions = [
    {id: 1, name: 'abel'},
    {id: 2, name: 'agoi'},
    {id: 3, name: 'adeyemi'},
  ];
  radioButtons = [
    {id: 1, name: 'radio-button1'},
    {id: 2, name: 'radio-button2'},
    {id: 3, name: 'radio-button3'},
  ];

  defaultUsername = 'Default username';
  user = {
    username: '',
    selected: '',
    liked: ''
  }
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  // onSubmit(formGroup: FormGroup){
  //   console.log('Submit Clicked');
  //   console.log(formGroup.value);
  // }

   onSubmit(){
     console.log(this.submittedForm);
     this.user.username = this.submittedForm.form.value.userData.username;
     this.user.selected = this.submittedForm.form.value.userData.person;
     this.user.liked = this.submittedForm.form.value.userData.like;
     this.submitted = true;
     this.submittedForm.form.reset();
   }

   onSuggestUsernameClicked(){
    const suggestedName = 'rockYou';
    // this.submittedForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     person: 2,
    //     like: true
    //   },
    //   clap: 2
    // });

    this.submittedForm.form.patchValue({
      userData: {
        username: suggestedName,
        person: 2
      }
    });
   }
}
