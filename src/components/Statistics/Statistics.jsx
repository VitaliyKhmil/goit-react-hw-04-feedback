import PropTypes from 'prop-types';
import { StatisticsLabel } from './Statistics.styled';

export const Statistics = (
  { good, neutral, bad, total, positivePercentage,
  }) => {
  
  return (
    <div>
      <StatisticsLabel>
        Good: <span>{good}</span>
      </StatisticsLabel>
      <StatisticsLabel>
        Neutral: <span>{neutral}</span>
      </StatisticsLabel>
      <StatisticsLabel>
        Bad: <span>{bad}</span>
      </StatisticsLabel>
      <StatisticsLabel>
        Total: <span>{total}</span>
      </StatisticsLabel>
      <StatisticsLabel>
        Positive percentage: <span>{positivePercentage}%</span>
      </StatisticsLabel>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};