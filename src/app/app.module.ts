import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { SelectOptionComponent } from './select-option/select-option.component';
import { AddWishComponent } from './add-wish/add-wish.component';

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    SelectOptionComponent,
    AddWishComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
