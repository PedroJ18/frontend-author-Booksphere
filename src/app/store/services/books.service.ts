import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Book } from '../model/book-entity/book.entity';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private baseUrl = 'http://localhost:3000/book';
  private library: Book[] = [];  // Arreglo para almacenar la biblioteca

  constructor(private http: HttpClient) {}

  // Obtener todos los libros
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  // Obtener un libro por su ID
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`);
  }

  // Obtener todos los libros de la biblioteca
  getLibraryBooks(): Observable<Book[]> {
    const storedLibrary = localStorage.getItem('library');
    return of(storedLibrary ? JSON.parse(storedLibrary) : []); // Devuelve los libros del localStorage
  }

  // Añadir un libro a la biblioteca
  addBookToLibrary(book: Book): Observable<Book> {
    this.library.push(book);  // Añadir el libro al arreglo de la biblioteca
    this.saveLibrary();  // Guardar la biblioteca en localStorage
    return of(book);  // Retornar el libro añadido
  }

  // Eliminar un libro de la biblioteca
  removeBookFromLibrary(bookId: number): Observable<Book[]> {
    this.library = this.library.filter(book => book.id !== bookId);  // Filtrar el libro a eliminar
    this.saveLibrary();  // Guardar los cambios en localStorage
    return of(this.library);
  }

  // Guardar la biblioteca en localStorage
  private saveLibrary(): void {
    localStorage.setItem('library', JSON.stringify(this.library));
  }

  publishBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book).pipe(
      tap((newBook) => {
        // Asegurarse de que el libro se agregue a la biblioteca y luego se guarde en localStorage
        this.library.push(newBook);
        this.saveLibrary();
      })
    );
  }
}
