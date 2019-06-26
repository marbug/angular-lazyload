import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public time;

  constructor() { }

  ngOnInit() {
    this.time = new Date().getTime();
  }

}
