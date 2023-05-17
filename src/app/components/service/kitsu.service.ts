import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterDetailsReturn, Kitsu, KitsuUnique } from '../interfaces/Kitsu.interface';
import { CategoryMaster } from '../interfaces/Category.interface';
import { Character } from '../interfaces/Character.interface';
import { CharacterDetails } from '../interfaces/Caracter.interface';

@Injectable({
  providedIn: 'root'
})
export class KitsuService {


  constructor(private http: HttpClient) { }

  public findContent(date : string){
    return this.http.get<Kitsu>(`https://kitsu.io/api/edge/anime?filter[text]=${date}`)
  
  }


  public getContent(type: string, isRecomendation?: string ,hoja? : number): Observable<Kitsu> {
    if (isRecomendation == 'recomendation') {
      return this.http.get<Kitsu>(`https://kitsu.io/api/edge/${type}?page%5Blimit%5D=10&page%5Boffset%5D=${Math.random() * 200}`)
    }else if (isRecomendation == 'trending') {
      return this.http.get<Kitsu>(`https://kitsu.io/api/edge/trending/anime`)
    }else {

      return this.http.get<Kitsu>(`https://kitsu.io/api/edge/${type}?page%5Blimit%5D=18&page%5Boffset%5D=${hoja}`)
    }
   
  }

  public getDetailsContent(type: string, id: string): Observable<KitsuUnique> {
    return this.http.get<KitsuUnique>(`https://kitsu.io/api/edge/${type}/${id}`)
  }

  public getDetailsCategories(type: string, id: string) {
    return this.http.get<CategoryMaster>(`https://kitsu.io/api/edge/${type}/${id}/categories`)
  }

  public getDetailsCharacters(type: string, id: string) {

    const personajes : CharacterDetailsReturn[] = [] ;
  this.http.get<Character>(`https://kitsu.io/api/edge/${type}/${id}/${type}-characters`).subscribe(
      (lista) => {
        lista.data.map(personaje => {
          const rol = personaje.attributes.role;
          this.http.get<CharacterDetails>(personaje.relationships.character.links.related).subscribe(personaje => {
            
            const finalReturn: CharacterDetailsReturn = {
              role: rol,
              image: personaje.data.attributes.image,
              description: personaje.data.attributes.description,
              canonicalName: personaje.data.attributes.canonicalName
            }
            personajes.push(finalReturn);
           
          })
        })
        return personajes ;
      }
    )


    return personajes;
  }

}
