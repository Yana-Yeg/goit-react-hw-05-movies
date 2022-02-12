import PropTypes from "prop-types";

export const Section = ({ children, title }) => {
  return (
    <>
      {title && <h1>{title}</h1>}
      {children}
    </>
  );
};

Section.propTypes = {
  children: PropTypes.array.isRequired,
  title: PropTypes.string,
};
