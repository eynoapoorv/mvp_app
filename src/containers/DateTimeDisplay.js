/**
 * File Name: DateTimeDisplay.js
 * 
 * Description: Display counter time for competition the login user
 * 
 * Author: Eynosoft Team
 */

import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
