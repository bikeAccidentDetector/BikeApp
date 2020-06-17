import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ServiceService } from '../../service/service.service';




@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage implements OnInit {

  email: any;
  firstNumber: any;
  lastNumber: any;
  hospitalName: any;
  hospitalNumber: any;
  addresss: any;



  constructor(private http: HttpClient,
    private router: Router,
    private activerRouter: ActivatedRoute,
    private storage: Storage,
    private _urlfrom: ServiceService
  ) {

  }

  ngOnInit() {

    setInterval(() => {
      this.getinfor();
    }, 2000);

  }//ngOnLinit





  // get post
  getinfor() {
    //my code
    this.storage.get('email').then((val) => {
      this.email = val;

      let url = this._urlfrom._url + "findAllUserDtails.php?email=" + this.email;

      this.http.get(url).subscribe((res) => {
        this.firstNumber = res['firstNumber'];
        this.lastNumber = res['lastNumber'];
        this.hospitalName = res['hospitalName'];
        this.hospitalNumber = res['hospitalNumber'];
        this.addresss = res['addresss'];
      });
    });



  }







  openUpdatePage() {
    this.storage.get('email').then((val) => {
      this.email = val;
      this.router.navigate(['/update-infor/', this.email]);
    });
  }







}//export class