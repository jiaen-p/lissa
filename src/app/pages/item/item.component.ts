import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { Producto } from 'src/app/clases/producto';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public producto: Producto = null;
  constructor(private location: Location, private activeRoute: ActivatedRoute, public products: ProductsService) {
    activeRoute.queryParams.subscribe(params => {
      const id = params.id;
      this.producto = products.getProducto(id);
    });
  }
  ngOnInit(): void {
  }
  goBack(): void{
    this.location.back();
  }
}
