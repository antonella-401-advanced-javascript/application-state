import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY, drinkCoffee, eatSnack, takeNap, study } from "./moodActions";

describe('mood actions', () => {
  it('creates a drink coffee action', () => {
    expect(drinkCoffee()).toEqual({
      type: DRINK_COFFEE
    });
  });

  it('creates an eat snack action', () => {
    expect(eatSnack()).toEqual({
      type: EAT_SNACK
    });
  });

  it('creates a take nap action', () => {
    expect(takeNap()).toEqual({
      type: TAKE_NAP
    });
  });

  it('creates a study action', () => {
    expect(study()).toEqual({
      type: STUDY
    });
  });
});