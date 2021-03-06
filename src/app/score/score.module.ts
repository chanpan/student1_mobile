import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScorePage } from './score.page';
import { ComponentsModule } from '../components/component.module.component';

const routes: Routes = [
  {
    path: '',
    component: ScorePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScorePage]
})
export class ScorePageModule {}
