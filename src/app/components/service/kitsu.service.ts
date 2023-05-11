import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kitsu } from '../interfaces/Kitsu.interface';

@Injectable({
  providedIn: 'root'
})
export class KitsuService {

  constructor(private http: HttpClient) { }

  public getContent(type: string, isRecomendation: boolean = true): Observable<Kitsu> {
    if (isRecomendation) {
      return this.http.get<Kitsu>(`https://kitsu.io/api/edge/${type}?page%5Blimit%5D=10&page%5Boffset%5D=${Math.random() * 200}`)
    }
    return this.http.get<Kitsu>(`https://kitsu.io/api/edge/${type}`)

  }

}
