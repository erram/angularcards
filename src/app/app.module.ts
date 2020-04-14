import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CardsearchComponent } from './components/cardsearch/cardsearch.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDF8yDvQmTPxNoAFeHFVdtQssl1hLJYVZM',
  authDomain: 'angular-dd60b.firebaseapp.com',
  databaseURL: 'https://angular-dd60b.firebaseio.com',
  projectId: 'angular-dd60b',
  storageBucket: 'angular-dd60b.appspot.com',
  messagingSenderId: '766757814428',
  appId: '1:766757814428:web:15f2ce0465c1d6382e6d59',
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    HomepageComponent,
    CardsearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
