import { Routes } from '@angular/router';
import { BookDetailsComponent } from './store/components/book-details/book-details.component';


import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";
import { StoreBooksComponent } from "./store/pages/store-books/store-books.component";
import {PublishBookComponent} from "./author/pages/publish-book/publish-book.component";
import { LibraryComponent } from "./author/pages/library/library.component";

export const routes: Routes = [
    { path: 'store/store-books', component: StoreBooksComponent },
    { path: '', redirectTo: 'store/store-books', pathMatch: 'full' },
    { path: 'publish-book', component: PublishBookComponent },
    { path: 'library', component: LibraryComponent},
    { path: 'books/:id', component: BookDetailsComponent },
    { path: '**', component: PageNotFoundComponent }
];
