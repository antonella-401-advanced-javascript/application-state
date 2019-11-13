export const getCoffee = state => state.mood.coffees;
export const getSnack = state => state.mood.snacks;
export const getNap = state => state.mood.naps;
export const getStudy = state => state.mood.studies;
export const getReset = state => state.mood;

export const getActions =  state => [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', count: getCoffee(state) },
  { name: 'EAT_SNACK', text: 'Snack', count: getSnack(state) },
  { name: 'TAKE_NAP', text: 'Nap', count: getNap(state) },
  { name: 'STUDY', text: 'Study', count: getStudy(state) },
  { name: 'RESET', text: 'Reset' }
];

export const isTired = state => getCoffee(state) < 1 && getNap(state) < 1;
export const isHyper = state => getCoffee(state) > 3;
export const isEducated = state => getStudy(state) > 2;
export const isHungry = state => getSnack(state) < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};