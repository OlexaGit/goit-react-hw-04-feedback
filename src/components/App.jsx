import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback/Feedback';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = item => {
    setState(prevState => ({ ...prevState, [item]: state[item] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good * 100) / countTotalFeedback());
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
