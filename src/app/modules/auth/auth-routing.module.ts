import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import LoginComponent from './pages/login/login.component';
import { ArtistsComponent } from 'src/app/components/artist/artist.component';

const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
