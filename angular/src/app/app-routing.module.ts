import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './views/home/home.component';
import { AllAdventuresComponent } from './views/all-adventures/all-adventures.component';
import { SingleAdventureComponent } from './views/single-adventure/single-adventure.component';



const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },

  { 
    path: 'home',  
    component: HomeComponent 
  },

  {
   path: 'all-adventures',
   component: AllAdventuresComponent
 },

 {
   path: 'single-adventure/:ID',
   component: SingleAdventureComponent
 }
 
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}