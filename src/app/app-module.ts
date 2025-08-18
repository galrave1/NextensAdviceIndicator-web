import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app-component/app-component';
import { WealthReportComponent } from './Components/wealth-report-component/wealth-report-component';
import { PropertyGrowthReportComponent } from './Components/property-growth-report-component/property-growth-report-component';

@NgModule({
  declarations: [
    AppComponent,
    WealthReportComponent,
    PropertyGrowthReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}



// import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing-module';
// import { App } from './app';

// @NgModule({
//   declarations: [
//     App
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [
//     provideBrowserGlobalErrorListeners()
//   ],
//   bootstrap: [App]
// })
// export class AppModule { }
