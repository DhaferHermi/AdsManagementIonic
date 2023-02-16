import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdsListService } from '../ads-list.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private listAds: AdsListService,
    private router: Router,) { }

  ngOnInit() {
  }
  signup(newUser){
    this.listAds.signup(newUser['username']);
    this.router.navigateByUrl('/login');
  }
}
