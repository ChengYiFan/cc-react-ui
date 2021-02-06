import React from 'react';
import styles from './index.less';

const TabSelect = ({ value, options, onChange }) => {
  return (
    <div className={styles.tabSelector}>
      <ul>
        {options.map((opt) => (
          <li
            key={opt.value}
            className={`${opt.value === value ? styles.selected : ''}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabSelect;
