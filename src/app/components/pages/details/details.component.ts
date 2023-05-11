import { Component, OnInit } from '@angular/core';
import { CharacterDetailsReturn, Datum, Kitsu, TypeEnum } from '../../interfaces/Kitsu.interface';
import { Category } from '../../interfaces/Category.interface';
import { KitsuService } from '../../service/kitsu.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public categorias: Category[] = [];
  public contenido!: Datum;
  public personajes! : CharacterDetailsReturn[];
  public videoLink! : any;


  constructor(private serviceKitsu: KitsuService, private _router: ActivatedRoute,private sanitizer: DomSanitizer) { }



  ngOnInit(): void {

    const id = this._router.snapshot.paramMap.get('id')
    const type = this._router.routeConfig?.path?.substring(0, 5);

      if (id) {
        this.serviceKitsu.getDetailsContent(type!, id).subscribe(anime => {
         this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+anime.data.attributes.youtubeVideoId)
          this.contenido = anime.data;
          
        });
        this.serviceKitsu.getDetailsCategories(type!, id).subscribe(categories => {
          this.categorias = categories.data
        }
        )
        this.personajes = this.serviceKitsu.getDetailsCharacters(type!, id);
      }   
    }


}
