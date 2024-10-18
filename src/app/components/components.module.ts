
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { ArtistsService } from '../services/artists.service';


@NgModule({
  exports: [ ArtistsComponent,HomeComponent,WorksComponent],
  declarations: [ArtistsComponent, HomeComponent,WorksComponent],
  imports: [CommonModule],
  providers: [ArtistsService],
})
export class ComponentsModule { }

