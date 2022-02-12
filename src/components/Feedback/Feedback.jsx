import React, { useState } from "react";
import { Statistics } from "../Statistics/Statistics";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Section } from "./Section";
import s from "./Feedback.module.css";

const Feedback = () => {
  const [form, setForm] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const increment = (key) => {
    setForm((prevForm) => ({ ...prevForm, [key]: prevForm[key] + 1 }));
  };
  const countTotalFeedback = () => {
    return Object.values(form).reduce((total, el) => (total += el));
  };
  const countPositiveFeedbackPercentage = () => {
    return parseInt((form.good / countTotalFeedback()) * 100);
  };

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={form} onLeaveFeedback={increment} />

        <Statistics
          state={form}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
};
export default Feedback;

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   increment = (key) => {
//     this.setState((prevState) => ({ [key]: (prevState[key] += 1) }));
//   };
//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((total, el) => (total += el));
//   };
//   countPositiveFeedbackPercentage = () => {
//     return parseInt((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     // const { state } = this.state;
//     return (
//       <div className={s.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.increment}
//           />

//           <Statistics
//             state={this.state}
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           />
//         </Section>
//       </div>
//     );
//   }
// }
// export default Feedback;
