import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackButtons}>
      {Object.keys(options).map((item, index) => (
        <button
          key={index}
          className={css.button}
          type="button"
          onClick={() => onLeaveFeedback(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  key: PropTypes.number,
};
export default FeedbackOptions;
