import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { ListBarComponent } from './list-bar/list-bar.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveListBarComponent } from './reactive-list-bars/reactive-list-bars.component';

@NgModule({
  declarations: [AppComponent, ReactiveListBarComponent, ListItemComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
