import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { CurrentResponse } from 'src/app/interfaces/current-response';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private mainPath = '/api/weather'

  constructor(
    private http: HttpClient
  ) { }

  getCurrent(location: string): Observable<{ data: CurrentResponse }> {
    return this.http.get<{ data: CurrentResponse }>(`${this.mainPath}?q=${location}`).pipe(
      catchError(this.handleError<{ data: CurrentResponse }>('getCurrent'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
