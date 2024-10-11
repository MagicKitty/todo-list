import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoggingService } from './todo/data-access/logging.service';
import { LoggingAPIService } from './todo/data-access/logging-api.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: 'IS_PROD', useValue: true },
    {
      provide: LoggingService,
      useFactory: (IS_PROD: boolean) => (IS_PROD ? new LoggingAPIService() : new LoggingService()),
      deps: ['IS_PROD']
    }
  ]
};
