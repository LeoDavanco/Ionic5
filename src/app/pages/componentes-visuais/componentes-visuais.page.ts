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

    { title: 'Navegação', url: 'navegacao', icon: 'mail' },
    { title: 'Botoes', url: 'botao', icon: 'construct' },
    { title: 'Alertas', url: 'alert', icon: 'alert' },
    { title: 'Action-Sheet', url: 'actionsheet', icon: 'cog' },
    { title: 'Badges', url: 'badges', icon: 'warning' },
    { title: 'Cards', url: 'cards', icon: 'albums' },
    { title: 'Checkbox', url: 'checkbox', icon: 'checkbox' },
    { title: 'Chip', url: 'chip', icon: 'list' },
    { title: 'Content', url: 'content', icon: 'code' },
    { title: 'DateTime', url: 'datetime', icon: 'time' },
    { title: 'Fab', url: 'fab', icon: 'radio-button-on' },
    { title: 'Grid', url: 'grid', icon: 'grid' },
    { title: 'Animacao', url: 'animacao', icon: 'code' },
    { title: 'Input', url: 'input', icon: 'laptop' },
    { title: 'Lista', url: 'list', icon: 'list' },
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    ]

   }

  ngOnInit() {
  }

  showPage(url : string){
    this.navCtrl.navigateForward(url);
  }
}
