import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { DragDropModule } from '@angular/cdk/drag-drop';
import { YoutubeSkeletonComponent } from './youtube-skeleton/youtube-skeleton.component';
import { CustonCheckboxComponent } from './custon-checkbox/custon-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeSkeletonComponent,
    CustonCheckboxComponent,
    
 
 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DragDropModule,
    FormsModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
