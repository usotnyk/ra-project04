import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './views/nav/nav.component';
import { HeaderComponent } from './views/header/header.component';
import { ShopComponent } from './views/shop/shop.component';
import { JournalEntriesComponent } from './views/journal-entries/journal-entries.component';
import { LatestAdventuresComponent } from './views/latest-adventures/latest-adventures.component';
import { FooterComponent } from './views/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ShopComponent,
    JournalEntriesComponent,
    LatestAdventuresComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
