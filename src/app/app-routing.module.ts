import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpactComponent } from './components/impact/impact.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: 'impact', component: ImpactComponent},
  { path: 'nav', component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
