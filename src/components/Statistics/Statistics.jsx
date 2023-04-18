import PropTypes from 'prop-types';
import React from "react";

export const Statistics = ({good, neutral, bad, total, percend}) => {
    return (
        <div>
        <h2>Statistics</h2>
        <ul>
          <li>Good:  
            <span>{good}</span>
          </li>
          <li>Neutral: 
          <span>{neutral}</span>
          </li>
          <li>Bad: 
          <span>{bad}</span>
          </li>
          <li>Total: 
          <span>{total}</span>
          </li>
          <li>Positive feedback: 
          <span>{percend}%</span>
          </li>
        </ul>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired, 
    bad: PropTypes.number.isRequired, 
    total: PropTypes.number.isRequired, 
    percend: PropTypes.number.isRequired
};