import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { PlaylistComponent } from './playlist/playlist.component';


const routes: Routes = [
  {path: 'log-on', component: LoginComponent},
  {path: 'home-page', component: MainComponent},
  {path: 'title-page', component: TitlePageComponent},
  {path: 'playlist-page', component: PlaylistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
