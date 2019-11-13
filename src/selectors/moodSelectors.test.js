import { getActions, getFace, getCoffee, getSnack, getNap, getStudy } from './moodSelectors';

describe('mood selectors', () => {

  it('can get coffee', () => {
    const state = {
      mood: {
        coffees: 2,
        snacks: 0,
        naps: 0,
        studies: 0
      }
    };

    const coffee = getCoffee(state);
    expect(coffee).toBe(2);
  });

  it('can get snacks', () => {
    const state = {
      mood: {
        coffees: 0,
        snacks: 2,
        naps: 0,
        studies: 0
      }
    };

    const snack = getSnack(state);
    expect(snack).toBe(2);
  });

  it('can get naps', () => {
    const state = {
      mood: {
        coffees: 0,
        snacks: 0,
        naps: 2,
        studies: 0
      }
    };

    const nap = getNap(state);
    expect(nap).toBe(2);
  });

  it('can get studies', () => {
    const state = {
      mood: {
        coffees: 0,
        snacks: 0,
        naps: 0,
        studies: 2
      }
    };

    const study = getStudy(state);
    expect(study).toBe(2);
  });

  it('can get face', () => {
    const state = {
      mood: {
        coffees: 2,
        snacks: 3,
        naps: 10,
        studies: 5
      }
    };

    const face = getFace(state);
    expect(face).toEqual('🤯');
  });

  it('can get actions', () => {
    const state = {
      mood: {
        coffees: 2,
        snacks: 3,
        naps: 10,
        studies: 5
      }
    };

    const actions = getActions(state);
    expect(actions).toEqual([
      { name: 'DRINK_COFFEE', text: 'Drink Coffee', count: 2 },
      { name: 'EAT_SNACK', text: 'Snack', count: 3 },
      { name: 'TAKE_NAP', text: 'Nap', count: 10 },
      { name: 'STUDY', text: 'Study', count: 5 },
      { name: 'RESET', text: 'Reset' }
    ]);
  });
});
