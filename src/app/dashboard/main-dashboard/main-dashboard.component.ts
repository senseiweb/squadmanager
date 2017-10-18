import { PersonnelRepoService } from './../../core/data/personnel-respository.service';
import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

declare var SP;
declare var _spPageContextInfo;
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  constructor(private _personnelRepo: PersonnelRepoService) { }

  ngOnInit() {
    this._personnelRepo.all().then((data) => {
      console.log(data);
    });
  }

}
