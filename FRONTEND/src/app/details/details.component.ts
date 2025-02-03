import { Component } from '@angular/core';
import { ArtistsService } from '../services/artists.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  artists: any = [];

  private jsonUrl = 'assets/artist.json';

  constructor(
    private artist: ArtistsService,
    private http: HttpClient,
    private router: ActivatedRoute
  ) {
    //obetenemos el params
    this.router.params.subscribe((params) => {
      console.log(params['id']);
      this.getArtista(params['id']);
    });
  }

  getArtista(id: string) {
    this.artist.getArtistById(id).subscribe((artists) => {
      console.log(artists);
      this.artists = artists;
      console.log(typeof artists, artists);
    });
  }
}
