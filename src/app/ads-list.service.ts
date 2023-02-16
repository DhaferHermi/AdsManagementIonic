import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdsListService {
  private user = '';
  private users = ['dhafer', 'dhafer2'];
  private AdsList = [
    {
      id: 1,
      owner: 'dhafer',
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

  getMyAds() {
    return this.AdsList.filter(ad => ad.owner == this.user['username']);

  }

  getAdById(id) {
    return this.AdsList.find((c) => c.id == id);
  }

  addAd(newAd) {
    newAd.id = this.AdsList[this.AdsList.length - 1].id + 1;
    console.log(newAd);

    this.AdsList.push(newAd);
  }

  connect(user):Boolean{
    var found = false;
    if( this.users.indexOf(user['username']) !== -1){
      this.user = user;
      found = true}
    else{
      this.user = '';
    }
    return found;
  }

  getUser(){
    return this.user;
  }

  signup(newUser){
    this.users.push(newUser);
  }

  constructor() { }
}
