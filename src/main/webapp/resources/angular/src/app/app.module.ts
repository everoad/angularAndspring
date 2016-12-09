import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { MainComponent }    from './components/main/main.component';

import { SidebarComponent } from './components/template/sidebar.component';
import { FooterComponent }  from './components/template/footer.component';


import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
