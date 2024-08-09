
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import {calculatorReducer} from "./ngrx/calculator.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      calculator: calculatorReducer,
    }),
  ],
};
