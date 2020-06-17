import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ServiceService } from '../../service/service.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-update-infor',
  templateUrl: './update-infor.page.html',
  styleUrls: ['./update-infor.page.scss'],
})
export class UpdateInforPage implements OnInit {

  firstNumber: any;
  lastNumber: any;
  hospitalName: any;
  hospitalNumber: any;
  addresss: any;
  getResponse: any;
  email: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _urlfrom: ServiceService,
    private storage: Storage,
    private location: Location
  ) { }

  ngOnInit() {
    this.storage.get('email').then((val) => {
      this.email = val;
    });

  }



  updateForm(updateData: NgForm) {

    let data = {
      email: this.email,
      firstNumber: updateData.value.firstNumber,
      lastNumber: updateData.value.lastNumber,
      hospitalName: updateData.value.hospitalName,
      hospitalNumber: updateData.value.hospitalNumber,
      addresss: updateData.value.addresss,
    };
    console.log(data);


    let url = this._urlfrom._url + "userdetails.php";

    this.http.post(url, data).subscribe((res) => {
      this.router.navigate(['/intro/' + this.email + '/hospital/']);
    });


  } //updateForm



}
