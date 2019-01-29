const React = require('react')
const ReactDOM = require('react-dom')
const greetingEditor = require('./greeting-editor')
const Greeter = require('./Greeter')

const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<Greeter view={greetingEditor} />, root)
