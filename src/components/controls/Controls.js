import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ actions, handleSelection, handleSave }) => (
  <div>
    <section>
      <button onClick={() => handleSave(actions)}>SAVE GAME</button>
    </section>
  
    <section className={styles.Controls}>
      {actions.map(({ name, text, count }) => (
        <button key={name} onClick={() => handleSelection(name)}>
          {text || name} {!!count && `- ${count}`}
        </button>
      ))}
    </section>
  </div>
);

Controls.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string
  })).isRequired,
  handleSelection: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
};

export default Controls;