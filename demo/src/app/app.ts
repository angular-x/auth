import { Component, signal } from '@angular/core';
import { Auth, AuthTheme } from '@angular.x/auth';

@Component({
  selector: 'app-root',
  imports: [Auth],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('auth');
  protected readonly theme = signal<AuthTheme>('white');
  protected setTheme(theme: AuthTheme) {
    this.theme.set(theme);
  }
}
