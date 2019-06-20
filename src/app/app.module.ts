import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteAvocatComponent } from './site-avocat/site-avocat.component';
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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './site-avocat/navbar/navbar.component';
import { FullCalendarComponent } from './site-avocat/full-calendar/full-calendar.component';
import { APhaseComponent } from './site-avocat/a-phase/a-phase.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteAvocatComponent,
    LoginComponent,
    AccueilComponent,
    InfoComponent,
    AAffaireComponent,
    LAffaireComponent,
    DAffaireComponent,
    ATacheComponent,
    DTacheComponent,
    DDocumentComponent,
    LTribunauxComponent,
    LUtilisateursComponent,
    NavbarComponent,
    FullCalendarComponent,
    APhaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
