import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AccueilComponent} from './accueil/accueil.component';
import {AppRoutingModule} from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    CommandesComponent,
    ContactsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
