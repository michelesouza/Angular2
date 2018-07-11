import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http'; //preciso importar o http, mais nao aparece
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { IRegistro } from './registro';
import { NgForm } from '@angular/forms';

@Injectable()
export class ContatoService {

  contatosUrl = 'app/angular-test.blabs.json'; //http://angular-test.blabs.us/ não funciona pois está privado
  appList:any[] =[{"id":1,"name":"Notebook Dell Inspiron i14-7460-A10S","price":3429.99,"sku":"131501024"},{"id":2,"name":"Notebook Acer A515-51G-72DB","price":2749.99,"sku":"132620885"},{"id":3,"name":"Notebook Ideapad 320","price":2599.99,"sku":"133252826"},{"id":4,"name":"Notebook A515-51-51UX","price":2198.99,"sku":"133459747"}];
  name:string;
  price:string;
  sku:string;
  constructor(private _http: Http){}

  onSubmit(form: NgForm){
    this.appList.push({"id":this.appList.length+1,"name":form.value.name,"price":form.value.price,"sku":form.value.sku});
  }

 onDelete(registro: IRegistro){
  this.appList = this.appList.filter((r:IRegistro ) => r.id != registro.id);

 }

  getIRegistro(): Promise<IRegistro[]>{
    return this._http.get(this.contatosUrl)
     .toPromise()
     .then(response => response.json() as IRegistro[])
  };

  listar() {
  return this._http.get(this.contatosUrl).map((response: Response) => <IRegistro[]> response.json())
  .do(data => console.log(JSON.stringify(data)));

  }

  criar(IRegistro: any){
    return this._http.post(this.contatosUrl, IRegistro);

  }
  
}
