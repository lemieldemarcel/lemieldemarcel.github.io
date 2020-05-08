import {NgModule} from '@angular/core';
import {AccueilComponent} from './accueil/accueil.component';
import {RouterModule, Routes} from '@angular/router';
import {CommandesComponent} from './commandes/commandes.component';
import {ContactsComponent} from './contacts/contacts.component';


const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'commandes', component: CommandesComponent},
  {path: 'contacts', component: ContactsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

