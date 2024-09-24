import { Component } from '@angular/core';
import { MatFormField } from "@angular/material/form-field";
import { MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { Book } from "../../../store/model/book-entity/book.entity"; //Entidad Book
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { UploadBookCoverComponent } from "../../components/upload-book-cover/upload-book-cover.component";
import { Router, RouterLink } from "@angular/router";
import { BooksService } from "../../../store/services/books.service";

@Component({
  selector: 'app-publish-book',
  standalone: true,
  imports: [MatFormField, MatLabel, MatInput, MatButton, MatSelectModule, FormsModule, ReactiveFormsModule, UploadBookCoverComponent, RouterLink],
  templateUrl: './publish-book.component.html',
  styleUrl: './publish-book.component.css',
})

export class PublishBookComponent {
  //Definimos variables
  book: Book = new Book(); //Creamos un nuevo objeto de tipo "Book"
  selectedFormat: string | null=null; //Variable para controlar el formato seleccionado por el usuario
  categories = new FormControl([]); //Variable para control de formulario para las categorías seleccionadas
  categoryList = ['Horror', 'Drama', 'Fantasy', 'Comedy', 'Mystery', 'History', 'Biography', 'Novel', 'Academic']; //Lista de categorías

  //Constructor, inyectamos los servicios BooksService(acceder a funciones del servicio books) y Router(acceder a otras páginas)
  constructor(private booksService: BooksService, private router: Router) {

  }

  //Método para seleccionar formato del libro (físico o digital)
  selectFormat(format: string): void {
    this.selectedFormat = format; //Asigna el formato seleccionado
    if (format === 'digital') { //Condición que imprime un mensaje de formato seleccionado según el caso
      console.log("Selected digital format");
    } else {
      console.log("Selected physical format");
    }
  }

  //Método que permite seleccionar un archivo para la portada del libro
  coverSelected(event: any) {
    const file = event.target.files[0]; //Obtiene el archivo seleccionado
    if (file) {
      console.log('Selected file:', file); //Imprime el archivo seleccionado
    }
  }

  //Método para publicar un libro
  publishBook() {
    // Se asigna los valores al objeto book
    this.book.categorias = this.categories.value;
    this.book.fecha_publicacion = new Date().toISOString();

    // Llama al servicio de libros para publicar el nuevo libro
    this.booksService.publishBook(this.book).subscribe(() => {
      this.router.navigate(['/library']); // Redirigir a la página Library
    });
  }
}
