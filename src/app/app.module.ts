
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

// import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';
import { ContatoService } from './contato.service';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    
    //ContatosListagemComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    FormsModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
