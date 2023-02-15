import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdsListService } from '../ads-list.service';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.page.html',
  styleUrls: ['./add-ad.page.scss'],
})
export class AddAdPage implements OnInit {

  constructor(
    private listAds: AdsListService,
    private router: Router,    ) { }

  ngOnInit() {
  }

  addNewAd(valueForm) {
    this.listAds.addAd(valueForm);
    this.router.navigateByUrl('/home');
  }
}
