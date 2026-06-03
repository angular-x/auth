import { Component, } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-sign-up',
  standalone: true,
  imports: [RouterLink],
  template: `
  <button routerLink="/">Sign In</button>
  `,
})
export class SignUp {
}
