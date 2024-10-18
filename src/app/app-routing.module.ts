import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ArtistsComponent } from 'src/app/components/artist/artist.component';
import LoginComponent from './modules/auth/pages/login/login.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'artistas', component: ArtistsComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
