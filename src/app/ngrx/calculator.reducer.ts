
import { createReducer, on } from '@ngrx/store';
import * as CalculatorActions from './calculator.actions';

export interface CalculatorState {
  display: string;
  currentOperation: string | null;
  operand1: number | null;
  operand2: number | null;
}

export const initialCalculatorState: CalculatorState = {
  display: '0',
  currentOperation: null,
  operand1: null,
  operand2: null,
};

const _calculatorReducer = createReducer(
  initialCalculatorState,
  on(CalculatorActions.addDigit, (state, { digit }) => {
    const newDisplay = state.display === '0' ? digit : state.display + digit;
    return { ...state, display: newDisplay };
  }),
  on(CalculatorActions.addOperation, (state, { operation }) => {
    return {
      ...state,
      currentOperation: operation,
      operand1: parseFloat(state.display),
      display: '0',
    };
  }),
  on(CalculatorActions.calculate, (state) => {
    if (state.operand1 !== null && state.currentOperation !== null) {
      const operand2 = parseFloat(state.display);
      let result = 0;
      switch (state.currentOperation) {
        case '+':
          result = state.operand1 + operand2;
          break;
        case '-':
          result = state.operand1 - operand2;
          break;
        case '*':
          result = state.operand1 * operand2;
          break;
        case '/':
          result = state.operand1 / operand2;
          break;
      }
      return { ...state, display: result.toString(), operand1: null, currentOperation: null };
    }
    return state;
  }),
  on(CalculatorActions.clear, (state) => initialCalculatorState),
  on(CalculatorActions.exponentiate, (state) => {
    const result = Math.pow(parseFloat(state.display), 2);
    return { ...state, display: result.toString() };
  }),
  on(CalculatorActions.logarithm, (state) => {
    const result = Math.log10(parseFloat(state.display));
    return { ...state, display: result.toString() };
  }),
  on(CalculatorActions.sine, (state) => {
    const result = Math.sin(parseFloat(state.display));
    return { ...state, display: result.toString() };
  }),
  on(CalculatorActions.cosine, (state) => {
    const result = Math.cos(parseFloat(state.display));
    return { ...state, display: result.toString() };
  }),
  on(CalculatorActions.tangent, (state) => {
    const result = Math.tan(parseFloat(state.display));
    return { ...state, display: result.toString() };
  }),
  on(CalculatorActions.cotangent, (state) => {
    const result = 1 / Math.tan(parseFloat(state.display));
    return { ...state, display: result.toString() };
  })
);

export function calculatorReducer(state: any, action: any) {
  return _calculatorReducer(state, action);
}
