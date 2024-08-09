import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addDigit, addOperation, calculate, clear, exponentiate, logarithm, sine, cosine, tangent, cotangent } from './ngrx/calculator.actions';
import { selectDisplay } from './ngrx/calculator.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  display$: Observable<string>;
  isOn: boolean = false;

  constructor(private store: Store) {
    this.display$ = this.store.select(selectDisplay);
  }

  onPower(turnOn: boolean= true) {
    this.isOn = turnOn;
  }

  onDigit(digit: string) {
    if (this.isOn) {
      this.store.dispatch(addDigit({ digit }));
    }
  }

  onOperation(operation: string) {
    if (this.isOn) {
      this.store.dispatch(addOperation({ operation }));
    }
  }

  onCalculate() {
    if (this.isOn) {
      this.store.dispatch(calculate());
    }
  }

  onClear() {
    if (this.isOn) {
      this.store.dispatch(clear());
    }
  }

  onExponentiate() {
    if (this.isOn) {
      this.store.dispatch(exponentiate());
    }
  }

  onLogarithm() {
    if (this.isOn) {
      this.store.dispatch(logarithm());
    }
  }

  onSine() {
    if (this.isOn) {
      this.store.dispatch(sine());
    }
  }

  onCosine() {
    if (this.isOn) {
      this.store.dispatch(cosine());
    }
  }

  onTangent() {
    if (this.isOn) {
      this.store.dispatch(tangent());
    }
  }

  onCotangent() {
    if (this.isOn) {
      this.store.dispatch(cotangent());
    }
  }
}
