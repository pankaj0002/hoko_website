import React from 'react'
import { Redirect } from 'react-router-dom'
class MyComponent extends React.Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/components' />
    }
  }
  render () {
    return (
       <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Redirect</button>
       </div>
    )
  }
}