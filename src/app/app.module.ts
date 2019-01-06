import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {createCustomElement} from "@angular/elements";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [WeatherDetailsComponent]
})

export class AppModule {

  constructor(private injector: Injector) {
    const customElement = createCustomElement(WeatherDetailsComponent, {injector: injector});

    customElements.define('ng-weather', customElement);
  }

  ngDoBootstrap() {}

}
