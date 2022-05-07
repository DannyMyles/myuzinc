import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from 'ngx-owl-carousel-o';
import { ImpactComponent } from './components/impact/impact.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';

const routes: Routes = [
  { path: 'impact', component: ImpactComponent},
  { path: 'main-nav', component: MainNavComponent},
  { path: 'carousel', component: CarouselComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
