import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-reactive-form-page",
  templateUrl: "./reactive-form-page.component.html",
  styleUrls: ["./reactive-form-page.component.css"],
})
export class ReactiveFormPageComponent implements OnInit {
  sampleInputFormGroup: FormGroup;
  blockedUsers: String[] = ["navdeep", "james"];
  alreadyTakenEmails: String[] = ["abc@taken.com", "you@taken.com"];

  constructor() {}

  ngOnInit() {
    this.sampleInputFormGroup = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.validateUserName.bind(this),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email],
        this.validateEmailFromBackend.bind(this)),
    });
  }

  onSubmit() {
    console.log(this.sampleInputFormGroup.controls);
    console.log(this.sampleInputFormGroup.get("username").value);
    console.log(this.sampleInputFormGroup.get("email").value);
  }

  /**
   * Custom Synchronous Validator
   * @param control
   */
  validateUserName(control: FormControl): { [s: string]: boolean } {
    console.log(control.value);
    if (this.blockedUsers.indexOf(control.value) >= 0) {
      return { userBlocked: true };
    } else return null;
  }

  /**
   * Custom Async Validator
   */
  validateEmailFromBackend(
    control: FormControl
  ): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.alreadyTakenEmails.indexOf(control.value) >= 0) {
          resolve({ emailAlreadyTaken: true });
        } else resolve(null);
      }, 1500);
    });
  }
}
