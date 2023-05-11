import { Component, Input, OnInit } from '@angular/core';
import { KitsuService } from '../../service/kitsu.service';
import { Datum } from '../../interfaces/Kitsu.interface';

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.css']
})
export class RecomendationsComponent implements OnInit{

  public isPrimary? : string | null ;

  public tenRecomendacion : any[] =  [] ;

  constructor(private serviceKitsu : KitsuService){}

  @Input() propertyes : string[] | undefined;

  ngOnInit(): void {
    this.isPrimary = this.propertyes![1] ;
   this.serviceKitsu.getContent(this.propertyes![0]).subscribe(response => { 
    response.data.map(contenido =>{
      this.tenRecomendacion.push(contenido)
    })
  }) 
  }
}
