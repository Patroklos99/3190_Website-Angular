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
import { ProfileUsagerComponent } from './profile-usager/profile-usager.component';
import { ProfileEcoleComponent } from './profile-ecole/profile-ecole.component';
import { ModifInfoUsagerComponent } from './modif-info-usager/modif-info-usager.component';
import { ModifPassUsagerComponent } from './modif-pass-usager/modif-pass-usager.component';
import { ModifEmailUsagerComponent } from './modif-email-usager/modif-email-usager.component';
import { DropdownDirective } from './dropdown.directive';
import { FormsModule } from '@angular/forms';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModifEmailEcoleComponent } from './modif-email-ecole/modif-email-ecole.component';
import { ModifInfoEcoleComponent } from './modif-info-ecole/modif-info-ecole.component';
import { InscriptionEcoleComponent } from './inscription-ecole/inscription-ecole.component';
import { PanierComponent } from './panier/panier.component';

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
  {path: 'profile-usager', component: ProfileUsagerComponent},
  {path: 'profile-ecole', component: ProfileEcoleComponent},
  {path: 'modif-info-usager', component: ModifInfoUsagerComponent},
  {path: 'modif-pass-usager', component: ModifPassUsagerComponent},
  {path: 'modif-email-usager', component: ModifEmailUsagerComponent},
  {path: 'modif-email-ecole', component: ModifEmailEcoleComponent},
  {path: 'modif-info-ecole', component: ModifInfoEcoleComponent},


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
    PanierComponent,
    //EcolesComponent,
    AdminComponent,
    ContactsComponent,
    ClubComponent,
    NouveautesComponent,
    InscriptionComponent,
    ConnexionComponent,
    ProfileUsagerComponent,
    ProfileEcoleComponent,
    ModifInfoUsagerComponent,
    ModifPassUsagerComponent,
    ModifEmailUsagerComponent,
    DropdownDirective,
    ModifEmailEcoleComponent,
    ModifInfoEcoleComponent,
    InscriptionEcoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    //FontAwesomeModule,
  ],

  providers:[bdService],
  bootstrap: [AppComponent],
})
export class AppModule { }
