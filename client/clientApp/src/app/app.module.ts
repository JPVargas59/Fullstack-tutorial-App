import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTanquesComponent } from './components/lista-tanques/lista-tanques.component';
import { FormTanquesComponent } from './components/form-tanques/form-tanques.component';
import { HttpClientModule } from '@angular/common/http';
import { TanqueService } from './services/tanque.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaTanquesComponent,
    FormTanquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TanqueService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
