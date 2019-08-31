import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HinhchunhatComponent } from './hinhchunhat/hinhchunhat.component';
import { DaysoComponent } from './dayso/dayso.component';
import { HinhtronComponent } from './hinhtron/hinhtron.component';
import { ThaythechuoiComponent } from './thaythechuoi/thaythechuoi.component';

@NgModule({
  declarations: [
    AppComponent,
    HinhchunhatComponent,
    DaysoComponent,
    HinhtronComponent,
    ThaythechuoiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
