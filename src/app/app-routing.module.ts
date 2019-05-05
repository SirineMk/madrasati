import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'accueil', loadChildren: './accueil/accueil.module#AccueilPageModule' },
  { path: 'statistic', loadChildren: './statistic/statistic.module#StatisticPageModule' },
  { path: '', loadChildren: './homework/homework.module#HomeworkPageModule' },
  { path: 'remarks', loadChildren: './remarks/remarks.module#RemarksPageModule' },
  { path: 'exams', loadChildren: './exams/exams.module#ExamsPageModule' },
  { path: 'notes', loadChildren: './notes/notes.module#NotesPageModule' },
  { path: 'current', loadChildren: './homework/current/current.module#CurrentPageModule' },
  { path: 'old', loadChildren: './homework/old/old.module#OldPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
