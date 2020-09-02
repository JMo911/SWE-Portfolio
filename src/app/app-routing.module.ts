import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { GamesPageComponent } from './games-page/games-page.component';


const routes: Routes = [
  { path: 'games', pathMatch: 'full', redirectTo: 'landing' },
  // { path: 'games', component: GamesPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'projects', component: ProjectPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
