import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HinhchunhatComponent } from './hinhchunhat/hinhchunhat.component';
import { DaysoComponent } from './dayso/dayso.component';
import { HinhtronComponent } from './hinhtron/hinhtron.component';
import { Hinhtron2Component } from './hinhtron2/hinhtron2.component';
import { ThaythechuoiComponent } from './thaythechuoi/thaythechuoi.component';
import { Thaythechuoi2Component } from './thaythechuoi2/thaythechuoi2.component';
import { Hinhtron1Component } from './hinhtron1/hinhtron1.component';

@NgModule({
  declarations: [
    AppComponent,
    HinhchunhatComponent,
    DaysoComponent,
    HinhtronComponent,
    Hinhtron1Component,
    Hinhtron2Component,
    ThaythechuoiComponent,
    Thaythechuoi2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
