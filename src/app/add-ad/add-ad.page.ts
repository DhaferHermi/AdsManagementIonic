import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdsListService } from '../ads-list.service';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.page.html',
  styleUrls: ['./add-ad.page.scss'],
})
export class AddAdPage implements OnInit {
  user;
  constructor(
    private listAds: AdsListService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = this.listAds.getUser();
    if (this.user['username'] === undefined)
      this.router.navigateByUrl('/login');
    this.user = this.listAds.getUser();
  }

  addNewAd(valueForm) {
    valueForm['owner'] = this.user['username'];
    this.listAds.addAd(valueForm);
    this.router.navigateByUrl('/home');
  }
}
