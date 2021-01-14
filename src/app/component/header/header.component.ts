import { APP_BOOTSTRAP_LISTENER, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mujer } from '../../categorias/mujer.enum';
import { Hombre } from '../../categorias/hombre.enum';
import { Niño} from '../../categorias/niño.enum';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public mujer;
  public hombre;
  public nino;
  public selector = null;
  constructor(public route: ActivatedRoute) {
    this.mujer = Object.values(Mujer);
    this.hombre = Object.values(Hombre);
    this.nino = Object.values(Niño);
  }

  ngOnInit(): void {
  }
}
