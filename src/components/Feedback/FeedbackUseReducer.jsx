import React, { useReducer } from "react";
import { Statistics } from "../Statistics/Statistics";
import { FeedbackOptionsUseReducer } from "../FeedbackOptions/FeedbackOptionsUseReducer";
import { Section } from "./Section";
import s from "./Feedback.module.css";

const options = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "good":
      return { ...state, good: state.good + 1 };
    case "neutral":
      return { ...state, neutral: state.neutral + 1 };
    case "bad":
      return { ...state, bad: state.bad + 1 };
    default:
      throw new Error();
  }
}
export default function Feedback() {
  const [state, dispatch] = useReducer(reducer, options);

  const countTotalFeedback = () => {
    return Object.values(state).reduce((total, el) => (total += el));
  };
  const countPositiveFeedbackPercentage = () => {
    return parseInt((state.good / countTotalFeedback()) * 100);
  };
  return (
    <div className={s.container}>
      <Section title="Please leave feedback useReducer">
        <FeedbackOptionsUseReducer options={state} onLeaveFeedback={dispatch} />
        <Statistics
          state={state}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
}
