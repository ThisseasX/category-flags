import React, { useState } from 'react';
import clsx from 'clsx';
import classes from './styles.module.css';

const CATEGORIES = [
  'Delivery',
  'Quality',
  'Knowledge',
  'Responsibility Accountability',
  'Solutions Attitude',
  'Effective Communication',
  'Team Before Ego',
  'Leadership Team',
  'Leadership Results',
];

const printCategories = (selectedCategories) =>
  CATEGORIES.filter((_, index) => selectedCategories & (2 ** index)).join(', ');

const App = () => {
  const [selectedCategories, setSelectedCategories] = useState(0);

  const printedCategories = printCategories(selectedCategories);

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    if (0 <= value && value <= 511) {
      setSelectedCategories(value);
    }
  };

  const isSelected = (index) => selectedCategories & (2 ** index);

  const toggleCategory = (index) => () => {
    setSelectedCategories(
      (selectedCategories) => selectedCategories ^ (2 ** index),
    );
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>
        Type a category combination number between{' '}
        <strong className={classes.strong}>0</strong> and{' '}
        <strong className={classes.strong}>511</strong>
      </h1>

      {printedCategories && (
        <p className={classes.heading}>{printedCategories}</p>
      )}

      <div className={classes.inputContainer}>
        <input
          className={classes.input}
          value={selectedCategories}
          onChange={handleChange}
        />
      </div>

      {CATEGORIES.map((category, index) => (
        <button
          key={category}
          type="button"
          onClick={toggleCategory(index)}
          className={clsx(classes.button, isSelected(index) && classes.active)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default App;
