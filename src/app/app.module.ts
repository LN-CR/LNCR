import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployersComponent } from './employers/employers.component';
import { FreelancersComponent } from './freelancers/freelancers.component';
import { SubnavComponent } from './freelancers/subnav/subnav.component';
import { FreelistComponent } from './freelancers/freelist/freelist.component';
import { FreefindComponent } from './freelancers/freefind/freefind.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    ProfileComponent,
    EmployersComponent,
    FreelancersComponent,
    SubnavComponent,
    FreelistComponent,
    FreefindComponent,
    CarouselBasicComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,
    FormsModule,
    NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
