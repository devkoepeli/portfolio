import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { InMemoryScrollingOptions, InMemoryScrollingFeature, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled'
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, inMemoryScrollingFeature)]
};
