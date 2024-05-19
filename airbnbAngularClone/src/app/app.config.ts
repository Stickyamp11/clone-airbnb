import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(CommonModule)]
};
