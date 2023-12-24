import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { selectIsSubmitting } from '../../store/reducers';

@Component({
  selector: 'mc-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private fb: FormBuilder,
    private store: Store) { }

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  isSubmitting$ = this.store.select(selectIsSubmitting);

  onSubmit() {
    console.log('form: ', this.form.getRawValue())
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue()
    }
    this.store.dispatch(authActions.register({ request }))

  }
}
