import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { Book } from '../../model/book-entity/book.entity';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    // Obtener todos los libros usando el servicio
    this.booksService.getAllBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }
}

