import { Component, OnInit } from '@angular/core';
import { KitsuService } from '../../service/kitsu.service';
import { Kitsu } from '../../interfaces/Kitsu.interface';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder , FormControl , FormGroup} from "@angular/forms";
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {

  public catalogo! : Kitsu;
  public hoja : number = 1;
  public route: any = '';
  public encontrado! : Kitsu ;
    constructor(private serviceKitsu:KitsuService,private _router: ActivatedRoute,private fb : FormBuilder){
      this.route = this._router.url;
    }

    datoBuscado : FormGroup = this.fb.group(
      {
        buscador:['']
      }
    )

  buscardor(){
    this.serviceKitsu.findContent(this.datoBuscado.value['buscador']).subscribe(r => {
      this.encontrado = r
    })
    
  }

  ngOnInit(): void {
  
    this.hoja =  Number(this._router.snapshot.paramMap.get('hoja'))

    this.serviceKitsu.getContent('anime','', this.hoja*18).subscribe(response => {
        this.catalogo = response;
      })
  
  }
  

}
