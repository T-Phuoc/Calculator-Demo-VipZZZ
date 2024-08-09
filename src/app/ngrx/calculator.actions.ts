
import { createAction, props } from '@ngrx/store';

export const addDigit = createAction('[Calculator] Add Digit', props<{ digit: string }>());
export const addOperation = createAction('[Calculator] Add Operation', props<{ operation: string }>());
export const calculate = createAction('[Calculator] Calculate');
export const clear = createAction('[Calculator] Clear');
export const exponentiate = createAction('[Calculator] Exponentiate');
export const logarithm = createAction('[Calculator] Logarithm');
export const sine = createAction('[Calculator] Sine');
export const cosine = createAction('[Calculator] Cosine');
export const tangent = createAction('[Calculator] Tangent');
export const cotangent = createAction('[Calculator] Cotangent');
