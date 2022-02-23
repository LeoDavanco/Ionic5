import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async showAlert(){

    this.alertCtrl.create({});
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: 'Essa eh uma mensagem de alerta.',
      buttons: ['OK']
    });

    alert.present();
  }

  async multipleAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: 'Essa eh uma mensagem de alerta.',
      buttons: ['Cancelar', 'Open Modal', 'Delete']

  })

  await alert.present();
  }

  async confirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async prompt(){
      const alert = await this.alertCtrl.create({
        header: 'Acesso Restrito',
        inputs: [
          {
            name: 'email',
            type: 'text',
            placeholder: 'Informe seu email'
          },
          {
            name: 'senha',
            type: 'password',
            placeholder: 'Informe sua senha'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (form) => {
              console.log(form);
            }
          }
        ]
      });
  
      await alert.present();

  }
}
