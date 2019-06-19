import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site-avocat/login/login.component';
import { AccueilComponent } from './site-avocat/accueil/accueil.component';
import { InfoComponent } from './site-avocat/info/info.component';
import { AAffaireComponent } from './site-avocat/a-affaire/a-affaire.component';
import { LAffaireComponent } from './site-avocat/l-affaire/l-affaire.component';
import { DAffaireComponent } from './site-avocat/d-affaire/d-affaire.component';
import { ATacheComponent } from './site-avocat/a-tache/a-tache.component';
import { DTacheComponent } from './site-avocat/d-tache/d-tache.component';
import { DDocumentComponent } from './site-avocat/d-document/d-document.component';
import { LTribunauxComponent } from './site-avocat/l-tribunaux/l-tribunaux.component';
import { LUtilisateursComponent } from './site-avocat/l-utilisateurs/l-utilisateurs.component';
import { FullCalendarComponent } from './site-avocat/full-calendar/full-calendar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'info', component: InfoComponent },
  { path: 'a-affaire', component: AAffaireComponent },
  { path: 'l-affaire', component: LAffaireComponent },
  { path: 'd-affaire', component: DAffaireComponent },
  { path: 'd-affaire/:id', component: DAffaireComponent },
  { path: 'a-tache', component: ATacheComponent },
  { path: 'd-tache', component: DTacheComponent },
  { path: 'd-tache/:id', component: DTacheComponent },
  { path: 'd-document', component: DDocumentComponent },
  { path: 'd-document/:id', component: DDocumentComponent },
  { path: 'l-tribunaux', component: LTribunauxComponent },
  { path: 'l-utilisateurs', component: LUtilisateursComponent },
  { path: 'calendrier', component: FullCalendarComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '*', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
