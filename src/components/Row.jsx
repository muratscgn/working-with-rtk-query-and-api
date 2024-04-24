import PropTypes from "prop-types"

const Row = ({ children, className }) => {
  return (
    <div className={`container ${className}`}>
      {children}
    </div >
  )
}

export default Row

Row.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
}