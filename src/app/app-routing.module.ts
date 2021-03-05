import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployersComponent } from './employers/employers.component';
import { FreefindComponent } from './freelancers/freefind/freefind.component';
import { FreelancersComponent } from './freelancers/freelancers.component';
import { FreelistComponent } from './freelancers/freelist/freelist.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },
  { path: 'freelancers', component: FreelancersComponent },
  { path: 'employers', component: EmployersComponent },
  { path: 'freelancers/contacts', component: FreelistComponent },
  { path: 'freelancers/find', component: FreefindComponent },
  { path: 'profile', component: ProfileComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
