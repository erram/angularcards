import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn } from '../../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn()],
  host: { '[@moveIn]': '' },
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(public auth: AngularFireAuth, private router: Router) {
    if (auth.auth.currentUser) {
      this.router.navigateByUrl('/homepage');
    }
  }

  loginFb() {
    this.auth.auth
      .signInWithPopup(new auth.FacebookAuthProvider())
      .then((success) => {
        this.router.navigate(['/homepage']);
      })
      .catch((err) => {
        this.error = err;
      });
  }

  loginGoogle() {
    this.auth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((success) => {
        this.router.navigate(['/homepage']);
      })
      .catch((err) => {
        this.error = err;
      });
  }

  ngOnInit(): void {}
}
