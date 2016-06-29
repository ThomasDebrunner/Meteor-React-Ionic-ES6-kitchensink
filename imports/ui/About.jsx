import React from 'react';
import { Link } from 'react-router'
import { IonButton } from 'reactionic'

export default class About extends React.Component {

  logPlatform() {
    console.log(this.context.ionPlatform.name)
    console.log(this.context)

  }

  render() {
    return (
      <div>
        <h2>About</h2>
          <ul role='nav'>
            <li><Link to='/'>Index</Link></li>
          </ul>
          <IonButton type="outline" onClick={this.logPlatform.bind(this)}>Show platform</IonButton>
      </div>

    )
  }
}

About.contextTypes = {
  ionPlatform: React.PropTypes.object
}
