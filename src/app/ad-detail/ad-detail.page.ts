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
  user;
  constructor(
    private listAds: AdsListService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}
 
  ngOnInit(): void {
    this.user = this.listAds.getUser();
    if(this.user['username']=== undefined)
      this.router.navigateByUrl('/login');
    this.ad = this.listAds.getAdById(this.activatedRoute.snapshot.paramMap.get('id'));
  }

} 
