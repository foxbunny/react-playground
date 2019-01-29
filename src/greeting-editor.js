const React = require('react')
const PropTypes = require('prop-types')

module.exports = ({ name, reset, updateName }) =>
  <>
    <label>
      Name:
      <input onChange={updateName} value={name} />
    </label>
    <p>Hello, {name}!</p>
    <div>
      <button onClick={reset}>Reset</button>
    </div>
  </>

module.exports.propTypes = {
  name: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired
}
