import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})

  export class ContatosListagemComponent implements OnInit {
    contatos: Array<any>;

    constructor(private contatoSetvice: ContatoService) { }

    ngOnInit() {
      this.listar();  
    }

    listar() 
    {
      this.contatoSetvice.listar().subscribe(dados => this.contatos = dados);
    }
  
}
