import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { SessionComponent } from "./pages/session/session.component";
import { ViewSessionComponent } from "./pages/session/view-session/view-session.component";
import { ViewProfileComponent } from "./pages/profile/view-profile/view-profile.component"
import { OurStoryComponent } from "./pages/our-story/our-story.component";
import { InitiativeComponent } from "./pages/initiative/initiative.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { TeamComponent } from "./pages/team/team.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { DreamComponent } from './pages/dream/dream.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "session", component: SessionComponent },
  { path: "session/view-session", component: ViewSessionComponent },
  { path: "profile/view-profile", component: ViewProfileComponent },
  { path: "profile", component: ProfileComponent },
  { path: "ourStory", component: OurStoryComponent },
  { path: "dream", component: DreamComponent },
  { path: "initiative", component: InitiativeComponent },
  { path: "team", component: TeamComponent },
  { path: "contact-Us", component: ContactUsComponent },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
