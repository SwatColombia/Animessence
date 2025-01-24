import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/services/artists.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistsComponent  {

  constructor(private artistsService: ArtistsService,
              private httpClient: HttpClientModule
) { }

  getArtists() {
    this.artistsService.getArtists().subscribe((artists) => {
      console.log(artists);
    });
  }
  
}

