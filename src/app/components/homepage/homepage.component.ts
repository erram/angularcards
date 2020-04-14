import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveInLeft, fallIn } from '../../router.animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [moveInLeft(), fallIn()],
  host: { '[@moveInLeft]': '' },
})
export class HomepageComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public af: AngularFireAuth, private router: Router) {
    if (this.af.auth.currentUser) {
      this.name = this.af.auth.currentUser;
      console.log(this.name);
    }
  }

  logout() {
    this.af.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {}
}
