import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public texto: string;
  constructor() {
    const s = 'Hola, quería obtener más información.';
    this.texto = encodeURI(s);
  }

  ngOnInit(): void {
  }

}
