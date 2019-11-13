import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getActions, getFace } from '../selectors/moodSelectors';
import { saveGame } from '../actions/gameActions';

const Moods = ({ actions, emoji, handleSelection, handleSave }) => {
  return (
    <>
      <Controls actions={actions} handleSelection={handleSelection} handleSave={handleSave} />
      <Face emoji={emoji} />
    </>
  );
};

const mapStateToProps = state => ({
  actions: getActions(state),
  emoji: getFace(state)
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({
      type: name
    });
  },
  handleSave(state) {
    dispatch(saveGame(state));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

Moods.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
  emoji: PropTypes.string.isRequired,
  handleSelection: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
};