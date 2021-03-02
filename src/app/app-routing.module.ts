import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployersComponent } from './employers/employers.component';
import { FreelancersComponent } from './freelancers/freelancers.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'freelancers', component: FreelancersComponent },
  { path: 'employers', component: EmployersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
