import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Imagen } from 'src/app/clases/imagen';
import { ProductsService } from 'src/app/service/products.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public id: string;
  public imagenes: Imagen[] = null;
  constructor(private location: Location, private activeRoute: ActivatedRoute, public products: ProductsService) {
    activeRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.imagenes = products.getProducto(this.id).imagenes as Imagen[];
    });
  }
  ngOnInit(): void {
  }
  goBack(): void{
    this.location.back();
  }
}
