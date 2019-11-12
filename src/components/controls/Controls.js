import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const counter = (name, count) => {
  if(name === 'DRINK_COFFEE') {
    return (!!count.coffee && `- ${count.coffee}`);
  }
  else if(name === 'EAT_SNACK') {
    return (!!count.snack && `- ${count.snack}`);
  }
  else if(name === 'TAKE_NAP') {
    return (!!count.nap && `- ${count.nap}`);
  }
  else if(name === 'STUDY') {
    return (!!count.study && `- ${count.study}`);
  }
};

const Controls = ({ actions, handleSelection }) => (
  <section className={styles.Controls}>
    {actions.map(({ name, text, count }) => (
      <button key={name} onClick={() => handleSelection(name)}>
        {text || name} {!!count && `${counter(name, count)}`}
      </button>
    ))}
  </section>
);

Controls.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string
  })).isRequired,
  handleSelection: PropTypes.func.isRequired
};

export default Controls;