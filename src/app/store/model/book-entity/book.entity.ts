export class Book {
  id: number;
  titulo: string;
  autor: string;
  categorias: any[] | null;
  descripcion: string;
  resumen: string;
  fecha_publicacion: string;
  isbn: string;
  formato: string;
  precio: number;
  ruta_archivo: string;
  portada: string;

  constructor(){
    this.id =  0;
    this.titulo =  '';
    this.autor = '';
    this.categorias = [];
    this.descripcion =  '';
    this.resumen =  '';
    this.fecha_publicacion =  '';
    this.isbn =  '';
    this.formato =  '';
    this.precio = 0;
    this.ruta_archivo =  '';
    this.portada  = '';
  }
}
