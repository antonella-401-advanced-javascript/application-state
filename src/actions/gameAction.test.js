import { SAVE_GAME, saveGame } from './gameActions';

describe('dog actions', () => {
  it('creates an increment age action', () => {
    let state;
    expect(saveGame()).toEqual({
      type: SAVE_GAME,
      payload: state
    });
  });
});