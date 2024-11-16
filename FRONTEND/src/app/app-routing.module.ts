import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ArtistsComponent } from 'src/app/components/artist/artist.component';
import LoginComponent from './modules/auth/pages/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { WorksComponent } from './components/works/works.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'artistas', component: ArtistsComponent },
  { path: 'carrito', component:CarritoComponent},
  { path: 'works',component: WorksComponent},

  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
