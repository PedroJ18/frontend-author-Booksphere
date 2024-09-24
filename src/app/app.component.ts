import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateService } from "@ngx-translate/core";
import { LanguageSwitcherComponent } from "./public/pages/language-switcher/language-switcher.component";
import { NgModule } from '@angular/core';
import { BookSearchComponent } from './store/components/book-search/book-search.component';
import { NgIf } from '@angular/common';
import { PublishBookComponent } from "./author/pages/publish-book/publish-book.component";

import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, LanguageSwitcherComponent, BookSearchComponent, NgIf, MatIconModule, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend-booksphere';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');

  }
  options = [
    { path: '/store/store-books', icon: 'library_books', title: 'Store'},
    { path: '/library', icon: 'home', title: 'Library'},
    { path: '/community', title: 'Community'},
    { path: '/friends', title: 'Friends'}
  ];

  protected readonly BookSearchComponent = BookSearchComponent;
}
