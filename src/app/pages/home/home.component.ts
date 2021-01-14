import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public promocion: string[] = [];
  constructor() {
    for (let i = 0; i < 3; i++){
      this.promocion.push('https://picsum.photos/600/200');
    }
  }

  ngOnInit(): void {
  }

}
