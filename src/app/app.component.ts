import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
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
    { title: 'Input', url: 'input', icon: 'laptop' },
    { title: 'Lista', url: 'list', icon: 'list' },
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
