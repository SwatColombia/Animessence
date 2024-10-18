import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {



  private apiUrl = '';

  constructor(private http: HttpClient,
              private httpClient: HttpClientModule
  ) { }

  // Método para obtener los resultados
  getProjects(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error: any) => {
        console.error('Error fetching data', error);
        throw error; // Re-lanza el error para que el componente lo maneje si es necesario
      })
    );
  }
}
