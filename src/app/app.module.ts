import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http'; // <-- NgModel lives here
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WeatherHomeComponent } from './modules/weather/page/weather-home/weather-home.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
