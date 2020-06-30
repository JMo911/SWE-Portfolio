// ANGULAR MODULES
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
// import { DomSanitizer } from '@angular/platform-browser';

// APOLLO IMPORTS
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";


// MY COMPONENTS
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { ContactFormComponent } from './contact-page/contact-form/contact-form.component';
import { SocialMediaTabsComponent } from './contact-page/social-media-tabs/social-media-tabs.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    ProjectPageComponent,
    ContactPageComponent,
    GamesPageComponent,
    ContactFormComponent,
    SocialMediaTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule,
    GraphQLModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: "/graphql"
          })
        }
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
