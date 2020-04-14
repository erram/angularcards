import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { from as observableFrom } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return observableFrom(this.auth.user).pipe(
      take(1),
      map((state) => !!state),
      tap((authenticated) => {
        if (!authenticated) this.router.navigate(['/login']);
      })
    );
  }
}
