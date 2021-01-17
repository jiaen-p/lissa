import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  // productos dummy, hay q crear la clase productos, pasarlos al componente productos para generar el id
  public productos: Producto[] = [];
  private session = window.sessionStorage;
  constructor(public router: Router, private products: ProductsService, private scroll: ViewportScroller) {
    router.events.subscribe(val => {
      [this.genero, this.categoria] = this.router.url.substring(1).split('/');
      if (this.categoria){
        this.categoria = decodeURI(this.categoria);
      }
      this.url.push(this.genero, this.categoria);
    });
  }
  ngOnInit(): void {
    Object.assign(this.productos, this.products.Productos);
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
}
