import PropTypes from "prop-types"

const Rightbar = ({ children }) => {
  return <div className="py-6">{children}</div>
}

Rightbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Rightbar
