import { Injectable } from '@angular/core';
import { Imagen } from '../clases/imagen';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public Productos: Producto[] = [];
  private lastGen = '';
  private lastCat = '';
  constructor() { }
  // todos los productos de x categoria
  // queda por implementar la seccion de filtro
  getProductos(genero = null, categoria = null): void{
    if (genero && (this.lastGen !== genero || this.lastCat !== categoria)){
      // console.log(`Before:\nGenero:\t\t${this.lastGen}\nCategoria:\t${this.lastCat}`);
      // console.log(`Entry:\nGenero:\t\t${genero}\nCategoria:\t${categoria}`);
      const productos = [];
      // fetch data from api only when needed, then assign data to Productos

      // dummy data for loop
      for ( let i = 0; i < 53; i++){
        productos.push(this.getProducto(String(i)));
      }
      Object.assign(this.Productos, productos);
    }
    this.lastCat = categoria ? categoria : null;
    this.lastGen = genero;
  }
  // devuelve el objeto de producto con un id de entrada
  getProducto(id: string): Producto{
    const imagenes =  {
      url: 'http://satyr.io/800x9:12',
      alt: 'generado'
    } as Imagen;
    const product =  {
      imagenes: [imagenes, imagenes, imagenes],
      tallas: ['M', 'L'],
      colores: ['Blanco', 'Gris'],
      productId: String(id),
      titulo: 'producto numero: ' + id,
      descripcion: `descripccion del producto con id: ${id}`
    } as Producto;
    return product;
  }
}
