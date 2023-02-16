import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdsListService } from '../ads-list.service';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.page.html',
  styleUrls: ['./my-ads.page.scss'],
})
export class MyAdsPage implements OnInit {
ads= [];
user;
constructor(
  private listAds: AdsListService,
  private router: Router) {}

ngOnInit(): void {
  this.user = this.listAds.getUser(); 
  if(this.user['username']=== undefined)
    this.router.navigateByUrl('/login');
    this.ads = this.listAds.getMyAds();
  }

}
