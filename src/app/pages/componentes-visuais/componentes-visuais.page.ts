import { Component, OnInit } from '@angular/core';
import{NavController} from '@ionic/angular';

@Component({
  selector: 'app-componentes-visuais',
  templateUrl: './componentes-visuais.page.html',
  styleUrls: ['./componentes-visuais.page.scss'],
})
export class ComponentesVisuaisPage implements OnInit {

  menuCollection : any[] = []
  constructor(private navCtrl : NavController) {

    this.menuCollection = [

    
    { title: 'Calendario', url: 'datetime', icon: 'time' },
    { title: 'Tarefas Asimov Jr', url: 'animacao', icon: 'code' },
    ]

   }

  ngOnInit() {
  }

  showPage(url : string){
    this.navCtrl.navigateForward(url);
  }
}
