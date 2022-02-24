import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logScrollStart(){
    console.log('iniciou a interacao com o scroll');
  }

  logScrollEnd(){
    console.log('terminou a interacao com o scroll');
  }

  logScrolling(event){
    console.log(event);
  }

}
