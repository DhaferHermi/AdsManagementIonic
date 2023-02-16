import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdsListService } from '../ads-list.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ads = [];
  userAds = [];
  user;
  constructor(
    private listAds: AdsListService,
    private router: Router) {}

  ngOnInit(): void {
    this.user = this.listAds.getUser();
    if(this.user['username']=== undefined)
      this.router.navigateByUrl('/login');
    this.ads = this.listAds.getAllAds();
  }
  logout(): void{
    this.listAds.connect('');
    this.router.navigateByUrl('/login');
  }
}
