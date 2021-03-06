import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GaleryComponent } from './shared/components/galery/galery.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { CharacterDetailPageComponent } from './pages/characters-page/pages/character-detail-page/character-detail-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationPageComponent } from './pages/location-page/location-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    CharactersPageComponent,
    GaleryComponent,
    PaginationComponent,
    CharacterDetailPageComponent,
    ContactPageComponent,
    LocationPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
