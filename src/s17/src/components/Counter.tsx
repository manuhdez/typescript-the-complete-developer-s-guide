import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// actions
import { incrementCount, decrementCount } from '../store/counter/actions';

interface CounterProps extends CounterState, CounterActions {}

interface CounterState {
  count: number;
}

interface CounterActions {
  increment: () => void;
  decrement: () => void;
}

function Counter({ count, increment, decrement }: CounterProps): JSX.Element {
  const onIncrement = () => {
    increment();
  };

  const onDecrement = () => {
    decrement();
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
    </div>
  );
}

interface StoreState {
  counter: {
    count: number;
  };
}

const mapStateToProps = (state: StoreState): CounterState => ({
  count: state.counter.count
});

const mapDispatchToProps = (dispatch: Dispatch<any>): CounterActions => ({
  increment: () => dispatch(incrementCount()),
  decrement: () => dispatch(decrementCount())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
