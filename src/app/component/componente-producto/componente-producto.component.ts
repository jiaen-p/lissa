import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imagen } from '../../clases/imagen';
@Component({
  selector: 'app-componente-producto',
  templateUrl: './componente-producto.component.html',
  styleUrls: ['./componente-producto.component.css']
})
export class ComponenteProductoComponent implements OnInit {
  @Input() imagenes: Imagen[];
  @Input() id: string;
  constructor(private scroll: ViewportScroller) { }
  ngOnInit(): void {
  }
  viewProduct(): void{
    const sc = this.scroll.getScrollPosition();
    window.sessionStorage.setItem('scroll', sc.toString());
  }
}
