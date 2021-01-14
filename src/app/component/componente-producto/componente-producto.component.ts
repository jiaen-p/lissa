import { Component, Input, OnInit } from '@angular/core';
import { Imagen } from '../../clases/imagen';
@Component({
  selector: 'app-componente-producto',
  templateUrl: './componente-producto.component.html',
  styleUrls: ['./componente-producto.component.css']
})
export class ComponenteProductoComponent implements OnInit {
  @Input() imagenes: Imagen;
  constructor() { }
  ngOnInit(): void {
  }

}
