import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdsListService {
  private user = '';
  private AdsList = [
    {
      id: 1,
      owner: 'Dhafer',
      title: '1st Ad',
      details:'1st Ad Details',
      price: '100',
    },
    {
      id: 2,
      owner: 'Not Dhafer',
      title: '2nd Ad',
      details:'2nd Ad Details',
      price: '200',
    },
  ];
  getAllAds() {
    return this.AdsList;
  }

  getAdById(id) {
    return this.AdsList.find((c) => c.id == id);
  }

  addAd(newAd) {
    newAd.id = this.AdsList[this.AdsList.length - 1].id + 1;
    console.log(newAd);

    this.AdsList.push(newAd);
  }

  connect(user){
    this.user = user;
  }

  getUser(){
    return this.user;
  }

  constructor() { }
}
