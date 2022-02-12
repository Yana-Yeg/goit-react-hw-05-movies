import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export const FeedbackOptionsUseReducer = ({ options, onLeaveFeedback }) => {
  const array = Object.keys(options);
  return (
    <>
      {array.map((el) => (
        <button
          key={el}
          className={s.btn}
          type="button"
          onClick={() => {
            onLeaveFeedback({ type: el });
          }}
        >
          {el}
        </button>
      ))}
    </>
  );
};

FeedbackOptionsUseReducer.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
