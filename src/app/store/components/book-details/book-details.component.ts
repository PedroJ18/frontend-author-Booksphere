import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { Book } from '../../model/book-entity/book.entity';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule]
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;
  formatoSeleccionado: string | undefined;  // Propiedad para almacenar el formato seleccionado

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.booksService.getBookById(+bookId).subscribe((data: Book) => {
        this.book = data;
      });
    }
  }

  seleccionarFormato(formato: string): void {
    this.formatoSeleccionado = formato;  // Almacena el formato seleccionado
  }

  pagar(): void {
    // Aquí puedes agregar la lógica para el pago
    if (this.formatoSeleccionado) {
      console.log(`Pagando por el libro en formato ${this.formatoSeleccionado}`);
    } else {
      console.log('Por favor, selecciona un formato antes de pagar.');
    }
  }
}
