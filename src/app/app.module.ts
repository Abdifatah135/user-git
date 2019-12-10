import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileService} from "./services/profile.service";
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import {FormsModule } from "@angular/forms";
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirective } from './strikethrough.directive';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DateCountPipe,
    StrikethroughDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ], 
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
