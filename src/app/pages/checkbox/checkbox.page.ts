import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {


  meses : any[] = [
    {nomeDoMes : 'Janeiro', valor : 1, marcado : true },
    {nomeDoMes : 'Fevereiro', valor : 2, marcado : false },
    {nomeDoMes : 'Marco', valor : 3, marcado : false },
    {nomeDoMes : 'Abril', valor : 4, marcado : false },
    {nomeDoMes : 'Maio', valor : 5, marcado : true },
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.meses); 
  }

  exibirMeses(){
    console.log(this.meses);
  }

}
