import { AppRoutingModule } from './app-routing.module';
import { LikeWidgetModule } from './shared/services/unique-id/components/like-widget/like-widget.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LikeWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
