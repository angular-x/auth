import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-sign-in',
  standalone: true,
  imports: [RouterLink],
  template: `
  <button routerLink="/sign-up">Sign Up</button>
  `,
})
export class SignIn {
}
