import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { Book } from '../../../store/model/book-entity/book.entity';
import { BooksService } from '../../../store/services/books.service';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})

export class LibraryComponent implements OnInit {
  library: Book[] = []; //Arreglo para almacenar la lista de libros

  //Constructor en el que se inyecta el servicio de BooksService
  constructor(private booksService: BooksService) {

  }

  //Método que se inicializa en el ciclo de vida del componente
  ngOnInit(): void {
    this.loadLibraryBooks();
  }

  //Método para cargar los libros desde el servicio
  loadLibraryBooks(): void {
    this.booksService.getLibraryBooks().subscribe((books: Book[]) => {
      this.library = books; //Actualiza el arreglo
    });
  }

  //Método para actualizar localStorage cuando se añaden o eliminan libros
  updateLocalStorage() {
    localStorage.setItem('library', JSON.stringify(this.library));
  }

  //Método para dirigirse a la página de detalles del libro seleccionado
  goToDetails(bookId: number): void {
    // Redirige al usuario a la página de detalles del libro utilizando su ID
    window.location.href = `/books/${bookId}`; // URL del libro específico
  }
}
