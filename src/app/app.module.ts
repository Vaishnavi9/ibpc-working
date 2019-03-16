import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChamberRegistrationComponent } from './components/chamber-registration/chamber-registration.component';
import { HomeComponent } from './components/home/home.component';
import { AffiliatedBodiesComponent } from './components/affiliated-bodies/affiliated-bodies.component';
import { MembershipComponent } from './components/membership/membership.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
//import { FooterComponent } from './components/footer/footer.component';
import { FatFooterComponent } from './components/fat-footer/fat-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ChamberRegistrationComponent,
    HomeComponent,
    AffiliatedBodiesComponent,
    MembershipComponent,
    EventsComponent,
    GalleryComponent,
    NewsComponent,
    ContactComponent,
    PageNotFoundComponent,
    HeaderComponent,
    //FooterComponent,
    FatFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
