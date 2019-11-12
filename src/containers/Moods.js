import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';

const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
];

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({
      type: name
    });
  }
});

const Moods = ({ face, coffees, snacks, naps, studies, handleSelection }) => {
  const controlActions = actions.map(action => ({
    ...action,
    count: {
      coffee: coffees,
      snack: snacks,
      nap: naps,
      study: studies
    }
  }));

  return (
    <>
      <Controls actions={controlActions} handleSelection={handleSelection}/>
      <Face emoji={face} />
    </>
  );
};

const mapStateToProps = state => ({
  coffees: state.coffees,
  snacks: state.snacks,
  naps: state.naps,
  studies: state.studies,
  face: getFace(state)
});

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

Moods.propTypes = {
  coffees: PropTypes.number.isRequired,
  snacks: PropTypes.number.isRequired,
  naps: PropTypes.number.isRequired,
  studies: PropTypes.number.isRequired,
  face: PropTypes.string.isRequired,
  handleSelection: PropTypes.func.isRequired
};

export default MoodsContainer;