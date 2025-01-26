import { Component } from '@angular/core';
import { ArtistsService } from '../services/artists.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  artist: any = [] = [];


  constructor(private artistService: ArtistsService, private httpClient: HttpClientModule) { 
    
console.log('Artist: ', this.artist.id);

  }
  
}


