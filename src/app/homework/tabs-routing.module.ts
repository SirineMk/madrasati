import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeworkPage } from './homework.page';


const routes: Routes = [
  {
    path: 'homework',
    component: HomeworkPage,
    children:
      [
        {
          path: 'current',
          children:
            [
              {
                path: '',
                loadChildren: './current/current.module#CurrentPageModule'
              }
            ]
        },
        {
          path: 'old',
          children:
            [
              {
                path: '',
                loadChildren: './old/old.module#OldPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/homework/current',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/homework/old',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/homework/current',
    pathMatch: 'full'
  },
  
  { path: 'current', loadChildren: './current/current.module#CurrentPageModule' },
  { path: 'old', loadChildren: './old/old.module#OldPageModule' }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}