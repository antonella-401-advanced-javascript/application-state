import reducer from './moodReducer';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';

describe('mood reducer', () => {
  it('handles unknown action', () => {
    const newState = reducer(undefined, { type: 'ubsd' });
    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });

  it('handles the DRINK_COFFEE action',  () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };

    const action = drinkCoffee();

    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...state,
      coffees: 1
    });
  });

  it('handles the EAT_SNACK action',  () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };

    const action = eatSnack();

    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...state,
      snacks: 1
    });
  });

  it('handles the TAKE_NAP action',  () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };

    const action = takeNap();

    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...state,
      naps: 1
    });
  });

  it('handles the STUDY action',  () => {
    const state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };

    const action = study();

    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...state,
      studies: 1
    });
  });
});