// @angular
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
// Types
import { AuthTheme } from './auth-theme.type';
import { AuthFooterLink } from './auth-footer-link.interface';

@Component({
  selector: 'ax-auth',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.scss'],
  host: {
    '[attr.data-theme]': 'theme',
  },
})
export class Auth {
  @Input() copyrightText = '© 2025 angular.x. All rights reserved.';
  @Input() footerLinks: AuthFooterLink[] = [
    { label: 'Terms', routerLink: '/terms' },
    { label: 'Privacy', routerLink: '/privacy' },
  ];
  @Input() showFooter = true;
  @Input() theme: AuthTheme = 'white';
}
