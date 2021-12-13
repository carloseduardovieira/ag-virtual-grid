import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgVirtualGridModule } from 'projects/ag-virtual-grid/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgVirtualGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
