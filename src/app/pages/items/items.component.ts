import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/clases/producto';
import { ProductsService } from '../../service/products.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public pagina = 1;
  public genero = '';
  public categoria = '';
  public url: string[] = [];
  // paginas totales
  public numPag = [];
  // productos dummy, hay q crear la clase productos, pasarlos al componente productos para generar el id
  public productos: Producto[] = [];
  constructor(public router: Router, public products: ProductsService, private scroll: ViewportScroller) {
    // this.updateUrl();
    router.events.subscribe(val => {
      this.updateUrl();
      products.getProductos(this.genero, this.categoria !== 'Producto' ? this.categoria : null);
    });
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void{
    const sc = window.sessionStorage.getItem('scroll');
    if (sc){
      const y = Number(sc.split(',')[1]);
      this.scroll.scrollToPosition([0, y]);
    }
    window.sessionStorage.removeItem('scroll');
  }
  private updateUrl(): void{
    // this.categoria = '';
    [this.genero, this.categoria] = this.router.url.substring(1).split('/');
    this.pagina = Number(this.genero.split('?pag=')[1]);
    this.genero = this.genero.split('?pag=')[0];
    if (this.categoria){
      this.pagina = Number(this.categoria.split('?pag=')[1]);
      this.categoria = decodeURI(this.categoria).split('?')[0];
    }
    this.url.push(this.genero, this.categoria);
    Object.assign(this.productos, this.products.Productos);
    const productosPorPagina = 8;
    const pag = productosPorPagina * (this.pagina - 1);
    this.productos = this.productos.slice(pag , pag + productosPorPagina);
    this.numPag = Array (Math.floor(this.products.Productos.length / 9) + 1);
  }
}
