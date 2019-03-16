import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamberRegistrationComponent } from './components/chamber-registration/chamber-registration.component';
import { HomeComponent } from './components/home/home.component';
import { AffiliatedBodiesComponent } from './components/affiliated-bodies/affiliated-bodies.component';
import { MembershipComponent } from './components/membership/membership.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chamber-registration', component: ChamberRegistrationComponent },
  { path: 'affiliated-bodies', component: AffiliatedBodiesComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'events', component: EventsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
