import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { LatestAdventuresService } from './services/latest-adventures.service'

import { AppComponent } from './app.component';
import { NavComponent } from './views/nav/nav.component';
import { HeaderComponent } from './views/header/header.component';
import { ShopComponent } from './views/shop/shop.component';
import { JournalEntriesComponent } from './views/journal-entries/journal-entries.component';
import { LatestAdventuresComponent } from './views/latest-adventures/latest-adventures.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { SingleAdventureComponent } from './views/single-adventure/single-adventure.component';
import { AllAdventuresComponent } from './views/all-adventures/all-adventures.component';
import { NavDarkComponent } from './views/nav-dark/nav-dark.component';
import { FormComponent } from './views/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ShopComponent,
    JournalEntriesComponent,
    LatestAdventuresComponent,
    FooterComponent,
    HomeComponent,
    SingleAdventureComponent,
    AllAdventuresComponent,
    NavDarkComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LatestAdventuresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
