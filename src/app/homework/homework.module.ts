import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { IonicModule } from '@ionic/angular';

import { HomeworkPage } from './homework.page';

const routes: Routes = [
  {
    path: '',
    component: HomeworkPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeworkPage]
})
export class HomeworkPageModule {}
