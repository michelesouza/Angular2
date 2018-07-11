import { Component, OnInit, Input } from '@angular/core';
import { ContatoService } from '../contato.service';
import { formArrayNameProvider, FormArrayName } from '../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  moduleId: module.id,
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})

  export class ContatosListagemComponent implements OnInit {
    contatos: Array<any>;

    @Input() form;

    constructor(private contatoSetvice: ContatoService) { }

    onSubmit(form){
      console.log(form);
      
    }

    ngOnInit() {
      this.listar();  
    }

    listar() 
    {
      this.contatoSetvice.listar().subscribe(dados => this.contatos = dados);
    }
  
}
