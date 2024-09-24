import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { Book } from '../../model/book-entity/book.entity';

@Component({
  selector: 'app-store-books',
  standalone: true,
  templateUrl: './store-books.component.html',
  styleUrls: ['./store-books.component.css'],
  imports: [CommonModule]  // Agrega CommonModule aquí si usas directivas como *ngFor
})
export class StoreBooksComponent implements OnInit {
  books: Book[] = [];  // Arreglo para almacenar los libros cargados
  filterTitle: string = '';  // Variable para el filtro de título

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    // Cargar libros desde el servicio
    this.booksService.getAllBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  // Filtrar libros por título
  filteredBooks() {
    if (!this.filterTitle) {
      return this.books;
    }
    return this.books.filter(book =>
      book.titulo.toLowerCase().includes(this.filterTitle.toLowerCase())
    );
  }
  goToDetails(bookId: number) {
    window.location.href = `/books/${bookId}`;
  }
  onTitleInput(event: any) {
    this.filterTitle = event.target.value;
  }
}
