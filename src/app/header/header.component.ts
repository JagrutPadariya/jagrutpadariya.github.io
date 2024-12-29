import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobileNavVisible: boolean = false;

  toggleMobileNav() {
    this.isMobileNavVisible = !this.isMobileNavVisible;
  }
}
