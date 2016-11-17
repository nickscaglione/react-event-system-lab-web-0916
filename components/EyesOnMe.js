const React = require('react')

class EyesOnMe extends React.Component {
  constructor(){
    super();

    this.focusser = this.focusser.bind(this)
    this.blurrer = this.blurrer.bind(this)
  }
  focusser() {
    console.log('Good!')
  }
  blurrer() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return(
      <button onFocus={this.focusser} onBlur={this.blurrer} />
    )
  }

}

module.exports = EyesOnMe
