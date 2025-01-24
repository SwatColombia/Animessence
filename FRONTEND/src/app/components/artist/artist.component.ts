import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/services/artists.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistsComponent  {

  artists: any[] = [];

  constructor(private artistsService: ArtistsService,
              private httpClient: HttpClientModule
  ) { }
  
  ngOnInit(): void {
    this.artistsService.getArtists().subscribe((artists) => {
      this.artists = artists;
      console.log('Artists: ', this.artists);
      
    });
  }
  
  
}

