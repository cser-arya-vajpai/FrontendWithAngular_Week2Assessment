import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../../services/http';
import { UserType } from '../../types/user-type';

@Component({
  selector: 'app-comp1',
  imports: [ReactiveFormsModule],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
})
export class Comp1 {
  svc = inject(HttpService);
  isSubmitted = false;
  isBusy = false;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(4), Validators.required]),
    avatar: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) return;

    this.isBusy = true;

    const body: UserType = {
      name: this.form.value.name!,
      email: this.form.value.email!,
      password: this.form.value.password!,
      avatar: this.form.value.avatar!,
    };

    this.svc.createUser(body).subscribe({
      next: (res) => {
        console.log(res);
        this.form.reset();
        this.isSubmitted = false;
        this.isBusy = false;
      },
      error: (e) => {
        console.log(e);
        this.isBusy = false;
      },
      complete: () => console.log('done'),
    });
  }
}
