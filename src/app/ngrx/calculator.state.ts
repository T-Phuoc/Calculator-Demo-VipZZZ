
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CalculatorState } from './calculator.reducer';

export const selectCalculatorState = createFeatureSelector<CalculatorState>('calculator');

export const selectDisplay = createSelector(
  selectCalculatorState,
  (state: CalculatorState) => state.display
);
