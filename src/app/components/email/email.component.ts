import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' },
})
export class EmailComponent implements OnInit {
  state: string = '';
  error: any;
  email: string = '';
  password: string = '';

  constructor(public af: AngularFireAuth, private router: Router) {
    if (this.af.auth.currentUser) {
      this.router.navigateByUrl('/homepage');
    }
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.af.auth
        .signInWithEmailAndPassword(
          formData.value.email,
          formData.value.password
        )
        .then((success) => {
          this.router.navigate(['/homepage']);
        })
        .catch((err) => {
          this.error = err;
        });
    }
  }

  ngOnInit(): void {}
}
