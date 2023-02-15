import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdsListService } from '../ads-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private listAds: AdsListService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  
  connect(valueForm) {
    this.listAds.connect(valueForm);
    this.router.navigateByUrl('/home');
  }
}
