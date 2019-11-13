import { SAVE_GAME, saveGame } from './gameActions';

describe('game actions', () => {
  it('creates a save game action', () => {
    let state;
    expect(saveGame()).toEqual({
      type: SAVE_GAME,
      payload: state
    });
  });
});