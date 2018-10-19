import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { WhiteComponent } from './white/white.component';
import { AboutComponent } from './about/about.component';
import { TextComponent } from './text/text.component';
import { TextTwoComponent } from './text-two/text-two.component';
import { TextThreeComponent } from './text-three/text-three.component';
import { FooterComponent } from './footer/footer.component';
import { WorksComponent } from './works/works.component';
import { WOneComponent } from './w-one/w-one.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    WhiteComponent,
    AboutComponent,
    TextComponent,
    TextTwoComponent,
    TextThreeComponent,
    FooterComponent,
    WorksComponent,
    WOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
