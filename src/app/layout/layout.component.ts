import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/blog">Blog</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class LayoutComponent {}