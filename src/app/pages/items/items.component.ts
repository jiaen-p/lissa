import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imagen } from 'src/app/clases/imagen';
import { Producto } from 'src/app/clases/producto';
import { ProductsService } from '../../service/products.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public genero = '';
  public categoria = '';
  public url: string[] = [];
  public imagenes: Imagen;
  // productos dummy, hay q crear la clase productos, pasarlos al componente productos para generar el id
  public productos: Producto[] = [];
  constructor(public router: Router, private products: ProductsService) {
    router.events.subscribe(val => {
      [this.genero, this.categoria] = this.router.url.substring(1).split('/');
      this.url.push(this.genero, this.categoria);
    });
  }

  ngOnInit(): void {
    // imagenes generados clase de Imagen
    // imagenes de la clase de producto
    // this.imagenes = {
    //   url: ['http://satyr.io/800x9:12', 'http://satyr.io/800x9:12', 'http://satyr.io/800x9:12'],
    //   alt: ['generado', 'generado', 'generado']
    // };
    this.products.getProductos();
    Object.assign(this.productos, this.products.Productos);
    this.imagenes = Object.assign(this.products.getProducto('123').imagenes);
    // console.log(this.productos);
  }
}
