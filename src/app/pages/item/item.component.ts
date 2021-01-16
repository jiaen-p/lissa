import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Imagen } from 'src/app/clases/imagen';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public id: string;
  public imagenes: Imagen = null;
  constructor(private location: Location, private activeRoute: ActivatedRoute) {
    activeRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.imagenes = params.imagenes;
    });
  }
  ngOnInit(): void {
  }
  goBack(): void{
    // console.log(e);
    this.location.back();
  }
}
