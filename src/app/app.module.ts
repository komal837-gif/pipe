import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { cssHighlighterDirective } from './shared/directives/cssHighlighter.directive';
import { advanceCssHighlighter } from './shared/directives/advanceCssHighlighter.directive';
import { LowerCase } from './shared/directives/LowerCase.directive';
import { CreditCard } from './shared/directives/creditCard.directive';
import { summaryPipe } from './shared/pipe/summary.pipe';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    cssHighlighterDirective,
    advanceCssHighlighter,
    LowerCase,
    CreditCard,
    summaryPipe,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
