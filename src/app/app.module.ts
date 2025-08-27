import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { WebinarListComponent } from './pages/webinar-list/webinar-list.component';
import { TopSpeakersComponent } from './pages/top-speakers/top-speakers.component';
import { ContinueWatchingComponent } from './pages/continue-watching/continue-watching.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WebinarListComponent,
    TopSpeakersComponent,
    ContinueWatchingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
