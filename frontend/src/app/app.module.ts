import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home/home.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { WidgetComponent } from './components/widget/widget/widget.component';
import { MoodComponent } from './components/widget/mood/mood.component';
import { BatteryComponent } from './components/widget/battery/battery.component';
import { GaugeComponent } from './components/widget/gauge/gauge.component';
import { ValueComponent } from './components/widget/value/value.component';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { IconValueComponent } from './components/widget/icon-value/icon-value.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnauthorizedComponent,
    WidgetComponent,
    MoodComponent,
    BatteryComponent,
    GaugeComponent,
    ValueComponent,
    IconValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
