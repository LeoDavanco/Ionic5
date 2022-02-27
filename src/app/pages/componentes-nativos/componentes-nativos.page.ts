import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes-nativos',
  templateUrl: './componentes-nativos.page.html',
  styleUrls: ['./componentes-nativos.page.scss'],
})
export class ComponentesNativosPage implements OnInit {

  menuCollection : any[] = []
  constructor(private navCtrl : NavController) {

    this.menuCollection = [

    { title: 'Camera', url: 'camera', icon: 'mail' },
    ]

   }

  ngOnInit() {
  }

  showPage(url : string){
    this.navCtrl.navigateForward(url);
  }
}
