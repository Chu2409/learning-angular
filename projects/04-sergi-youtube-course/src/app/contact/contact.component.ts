import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // user = {
  //   name: '',
  //   email: ''
  // }

  contactForm: FormGroup
  // userActive = {
  //   name: 'Daniel',
  //   lastName: 'Gonzalez',
  //   dni: '00000000',
  // }

  constructor(private form: FormBuilder) {
    this.contactForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      dni: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    // this.contactForm.get('name')?.setValue(this.userActive)

    // this.contactForm.patchValue({
    //   ...this.userActive,
    // })
    // this.contactForm.get('name')?.disable()
    // this.contactForm.get('lastName')?.disable()
    // this.contactForm.get('dni')?.disable()
    this.contactForm.valueChanges.subscribe(value => {
      console.log(value);
      
    })
  }

  send() {
    // console.log(this.user);
    console.log(this.contactForm);
  }

  hasErrors(field: string, errorType: string) {
    return this.contactForm.get(field)?.hasError(errorType) && this.contactForm.get(field)?.touched
  }
}
