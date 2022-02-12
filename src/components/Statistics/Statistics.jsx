import { Notification } from "../Notification";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export const Statistics = ({ state, total, positivePercentage }) => {
  return Object.values(state).every((element) => element === 0) ? (
    <Notification message="There is no feedback" />
  ) : (
    <div>
      <h2>Stastistics</h2>
      <div className={s.wrapper}>
        <span className="state">Good:</span>
        <span className={s.counter}>{state.good}</span>
      </div>
      <div className={s.wrapper}>
        <span className="state">Neutral:</span>
        <span className={s.counter}>{state.neutral}</span>
      </div>
      <div className={s.wrapper}>
        <span className="state">Bad:</span>
        <span className={s.counter}>{state.bad}</span>
      </div>
      <div className={s.wrapper}>
        <span className="state">Total:</span>
        <span className={s.counter}>{total()}</span>
      </div>
      <div className={s.wrapper}>
        <span className="state">Positive Feedback:</span>
        <span className={s.counter}>{positivePercentage()}%</span>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  state: PropTypes.object.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
