import {
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './routes';

export const appConfig = {
  providers: [provideRouter(routes), provideClientHydration(withEventReplay())]
};
