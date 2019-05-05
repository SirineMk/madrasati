import { CalendarComponent } from 'ionic2-calendar/calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExamsPage } from './exams.page';

import { NgCalendarModule } from 'ionic2-calendar';


const routes: Routes = [
  {
    path: '',
    component: ExamsPage
  }
];

@NgModule({
  imports: [
    NgCalendarModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  
  declarations: [ExamsPage]
})
export class ExamsPageModule {}
