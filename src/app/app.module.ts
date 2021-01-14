import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ItemComponent } from './pages/item/item.component';
import { ItemsComponent } from './pages/items/items.component';
import { ComponenteProductoComponent } from './component/componente-producto/componente-producto.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    ItemComponent,
    ItemsComponent,
    ComponenteProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }