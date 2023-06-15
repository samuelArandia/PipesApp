import { NgModule                } from '@angular/core';
import { BrowserModule           } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule     } from './shared/shared.module';

import { AppComponent } from './app.component';

// config of the app local
import localeEsCL from '@angular/common/locales/es-CL';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsCL, 'es-CL');
registerLocaleData(localeFrCA, 'fr-CA');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: 'LOCALE_ID', useValue: 'es-CL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
