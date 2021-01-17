import { APP_BOOTSTRAP_LISTENER, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mujer } from '../../categorias/mujer.enum';
import { Hombre } from '../../categorias/hombre.enum';
import { Niño} from '../../categorias/niño.enum';
import { ProductsService } from 'src/app/service/products.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public mujer;
  public hombre;
  public nino;
  constructor(public route: ActivatedRoute, private products: ProductsService) {
    this.mujer = Object.values(Mujer);
    this.hombre = Object.values(Hombre);
    this.nino = Object.values(Niño);
    products.getProductos();
  }

  ngOnInit(): void {
  }
}
