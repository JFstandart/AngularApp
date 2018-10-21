import { Component, OnInit } from '@angular/core';
import OctocatImages from '../../../assets/octocatImages.json';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  octocat:{
    number:string;
    name:string;
    url:string;
  }
  randomNumber:number;

  constructor() { }

  ngOnInit() {
    this.randomNumber = Math.floor(Math.random()*(144-0+1)+0);
    this.octocat = OctocatImages[this.randomNumber];
  }

}
