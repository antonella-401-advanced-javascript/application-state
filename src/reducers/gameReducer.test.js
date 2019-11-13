import reducer from './gameReducer';
import { saveGame } from '../actions/gameActions';


describe('game reducer', () => {
  it('handles unknown action', () => {
    const newState = reducer(undefined, { type: 'ubsd' });
    expect(newState).toEqual([]);
  });

  it('handles SAVE_GAME', () => {
    const state = [];

    const action = saveGame({
      coffees: 1,
      snacks: 0,
      naps: 3,
      studies: 0
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      coffees: 1,
      snacks: 0,
      naps: 3,
      studies: 0
    }]);
  });
});