import { Component, ViewEncapsulation } from '@angular/core';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {
  
  windowWidth: string;
  showSplash: boolean= true;

  constructor() {}
  ngOnInit(): void {
    setTimeout(()=>{
      this.windowWidth='-'+window.innerWidth+ 'px';
    },5000);
  }
  
}
