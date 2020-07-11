import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { TrackerService } from './tracker.service';
import { AccountComponent } from './account/account.component';
import { DataShowComponent } from './data-show/data-show.component';


const appRoutes: Routes = [
  //{path:'',component:LoginComponent,pathMatch:'full'},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'account',component:AccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    AccountComponent,
    DataShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [TrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
