
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { ArtistsService } from '../services/artists.service';
import { CarritoComponent } from './carrito/carrito.component';


@NgModule({
  exports: [ ArtistsComponent,HomeComponent,WorksComponent],
  declarations: [ArtistsComponent, HomeComponent,WorksComponent, CarritoComponent],
  imports: [CommonModule],
  providers: [ArtistsService],
})
export class ComponentsModule { }

