import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  // MatCardModule,
  // MatIconModule,
  // MatChipsModule,
  // MatExpansionModule,
  // MatFormFieldModule,
  // MatSlideToggleModule,
  // MatInputModule, MatCheckboxModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { PlaylistComponent } from './playlist/playlist.component';
import {BrowserAnimationsModule} from '@angular/platform browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TitlePageComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
