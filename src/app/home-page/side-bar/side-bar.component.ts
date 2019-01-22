import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  openMap = {
    sub1: true,
    sub2: false,
    sub3: false
  };
  constructor() { }

  ngOnInit() {
  }

}
