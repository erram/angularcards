import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';
import { CardsearchComponent } from './components/cardsearch/cardsearch.component';

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  {
    path: 'homepage',
    component: HomepageComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'cards',
        component: CardsearchComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
