import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LessonStartPage } from './lesson-start.page';
import { ComponentsModule } from '../components/component.module.component';

const routes: Routes = [
  {
    path: '',
    component: LessonStartPage
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
  declarations: [LessonStartPage]
})
export class LessonStartPageModule {}
