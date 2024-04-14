import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // navbar Variable
  navbarVariable:boolean = false;
  openMenu() {
    this.navbarVariable =! this.navbarVariable;
  };
  // language
  languageVariable:boolean = false;
  openLanguage() {
    this.languageVariable = true;
    const body = document.body as HTMLBodyElement;
  }
  offLanguage() {
    this.languageVariable = false;
  }
}