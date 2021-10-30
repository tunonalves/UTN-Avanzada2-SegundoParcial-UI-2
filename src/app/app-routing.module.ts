import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncidentAddComponent } from './components/incident-add/incident-add.component';
import { IncidentListComponent } from './components/incident-list/incident-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }