import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sobre-nosotros', component: AboutUsComponent},
  { path: ':genero', component: ItemsComponent},
  { path: ':genero/:cat', component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
