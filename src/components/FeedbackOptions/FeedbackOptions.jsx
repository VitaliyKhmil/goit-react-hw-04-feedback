import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
       
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <Button
            type="button"
            key={option}
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </Button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
