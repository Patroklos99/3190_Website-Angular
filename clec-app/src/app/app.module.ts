import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiedComponent } from './pied/pied.component';
import { TeteComponent } from './tete/tete.component';

import { BibliothequeComponent } from './livres/bibliotheque/bibliotheque.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SearchComponent } from './search/search.component';

import { EcolesComponent } from './ecoles/ecoles.component';
import { AdminComponent } from './admin/admin.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ClubComponent } from './club/club.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { bdService } from './bd.service';


const appRoutes: Routes =[
  {path: '', component: AccueilComponent}, 
  {path: 'bibliotheque', component: BibliothequeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'club', component: ClubComponent}, 
  {path: 'nouveautes', component: NouveautesComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'search', component: SearchComponent},
  {path: 'accueil', component: AccueilComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    TeteComponent,
    PiedComponent,
    //LivresComponent,
    BibliothequeComponent,
    AccueilComponent,
    SearchComponent,
    //PanierComponent,
    EcolesComponent,
    AdminComponent,
    ContactsComponent,
    ClubComponent,
    NouveautesComponent,
    InscriptionComponent,
    ConnexionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers:[bdService],
  bootstrap: [AppComponent],
})
export class AppModule { }
