import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TexttospeechPageRoutingModule } from './texttospeech-routing.module';

import { TexttospeechPage } from './texttospeech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TexttospeechPageRoutingModule
  ],
  declarations: [TexttospeechPage]
})
export class TexttospeechPageModule {}
