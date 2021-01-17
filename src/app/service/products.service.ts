import { Injectable } from '@angular/core';
import { Imagen } from '../clases/imagen';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public Productos: Producto[] = [];
  private id = 0;

  constructor() { }
  getProductos(): void{
    const productos = [];
    for ( let i = 0; i < 3; i++){
      productos.push(this.getProducto(String(i)));
      this.id++;
    }
    Object.assign(this.Productos, productos);
  }
  getProducto(id: string): Producto{
    const imagenes =  {
      url: 'http://satyr.io/800x9:12',
      alt: 'generado'
    } as Imagen;
    const product =  {
      imagenes: [imagenes, imagenes, imagenes],
      tallas: ['M', 'L'],
      colores: ['Blanco', 'Gris'],
      productId: String(this.id)
    } as Producto;
    return product;
  }
}
