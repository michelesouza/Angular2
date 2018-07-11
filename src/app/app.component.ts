import { Component } from '@angular/core';
import { IRegistro } from './registro';
import { ContatoService } from './contato.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContatoService]
  
})
export class AppComponent {
  title = 'app works!';

  constructor(private _registro: ContatoService) { }

   ngOnInit(): void {
    /*this._registro.listar()
    .subscribe(iregistro => this.iregistro = iregistro);*/
   }


   
}
