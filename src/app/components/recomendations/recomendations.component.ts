import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.css']
})
export class RecomendationsComponent implements OnInit{

  public isPrimary? : String | null ;

  @Input() propertyes : String[] | undefined;

  ngOnInit(): void {
    this.isPrimary = this.propertyes![1] ;
    console.log(this.propertyes)
  }
}
