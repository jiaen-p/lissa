import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { ItemsComponent } from './pages/items/items.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sobre-nosotros', component: AboutUsComponent},
  { path: 'Mujer', component: ItemsComponent},
  { path: 'Hombre', component: ItemsComponent},
  { path: 'Nino', component: ItemsComponent},
  { path: 'Mujer/Producto', component: ItemComponent},
  { path: 'Hombre/Producto', component: ItemComponent},
  { path: 'Nino/Producto', component: ItemComponent},
  { path: 'Mujer/:cat', component: ItemsComponent},
  { path: 'Hombre/:cat', component: ItemsComponent},
  { path: 'Nino/:cat', component: ItemsComponent},
  { path: 'Mujer/:cat/Producto', component: ItemComponent},
  { path: 'Hombre/:cat/Producto', component: ItemComponent},
  { path: 'Nino/:cat/Producto', component: ItemComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
