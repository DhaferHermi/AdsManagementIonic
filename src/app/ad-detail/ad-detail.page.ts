import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdsListService } from '../ads-list.service';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.page.html',
  styleUrls: ['./ad-detail.page.scss'],
})
export class AdDetailPage implements OnInit {

  ad ;
  constructor(
    private listAds: AdsListService,
    private router: Router,    
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.ad = this.listAds.getAdById(this.activatedRoute.snapshot.paramMap.get('id'));
  }

}
