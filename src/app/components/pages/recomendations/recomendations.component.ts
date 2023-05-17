import { Component, Input, OnInit } from '@angular/core';
import { KitsuService } from '../../service/kitsu.service';

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.css']
})
export class RecomendationsComponent implements OnInit{

  public isPrimary? : string | null ;

  public tenRecomendacion : any[] =  [] ;

  public title! : string;

  constructor(private serviceKitsu : KitsuService){}

  @Input() popiedad! : string ;

  @Input() propertyes : string[] | undefined;

  @Input() titulo! : string ;

  ngOnInit(): void {
    this.title = this.titulo;
  this.isPrimary = this.propertyes![1] ;
   this.serviceKitsu.getContent(this.propertyes![0],this.popiedad).subscribe(response => {
    response.data.map(contenido =>{
      this.tenRecomendacion.push(contenido)
    })
  }) 
  }
}
