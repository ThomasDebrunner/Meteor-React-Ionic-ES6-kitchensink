import React from 'react';
import { Link } from 'react-router'
import { IonButton } from 'reactionic'

export default class About extends React.Component {

  render() {
    return (
      <div>
        <h2>About</h2>
        <p>Meteor-React-Ionic-ES6-kitchensink example</p>
      </div>

    )
  }
}

About.contextTypes = {
  ionPlatform: React.PropTypes.object
}
