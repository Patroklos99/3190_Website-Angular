import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BibliothequeComponent } from './livres/bibliotheque/bibliotheque.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SearchComponent } from './search/search.component';
import { ProfileUsagerComponent } from './profile-usager/profile-usager.component';
import { ProfileEcoleComponent } from './profile-ecole/profile-ecole.component';
import { ModifInfoUsagerComponent } from './modif-info-usager/modif-info-usager.component';
import { ModifPassUsagerComponent } from './modif-pass-usager/modif-pass-usager.component';
import { ModifEmailUsagerComponent } from './modif-email-usager/modif-email-usager.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  {path: '', redirectTo:'/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'bibliotheque', component: BibliothequeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'nouveautes', component: NouveautesComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'connexion-admin', component: AdminComponent},
  {path: 'search', component: SearchComponent},
  {path: 'profile-usager', component: ProfileUsagerComponent},
  {path: 'profile-ecole', component: ProfileEcoleComponent},
  {path: 'modif-info-usager', component: ModifInfoUsagerComponent},
  {path: 'modif-pass-usager', component: ModifPassUsagerComponent},
  {path: 'modif-email-usagere', component: ModifEmailUsagerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
