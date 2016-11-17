const React = require('react')

class Keypad extends React.Component {
  constructor(){
    super();

    this.listener = this.listener.bind(this)
  }
  listener() {
    console.log('Entering password...')
  }

  render() {
    return(
      <input type="password" onKeyUp={this.listener} />
    )
  }

}

module.exports = Keypad
