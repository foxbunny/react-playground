const React = require('react')
const PropTypes = require('prop-types')

module.exports = class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'World'
    }
  }

  render () {
    return this.props.view({
      name: this.state.name,
      updateName: ({ target: { value } }) => this.updateName(value),
      reset: () => this.reset()
    })
  }

  updateName (value) {
    this.setState({
      name: value
    })
  }

  reset () {
    this.updateName('World')
  }
}

module.exports.propTypes = {
  view: PropTypes.func.isRequired
}
