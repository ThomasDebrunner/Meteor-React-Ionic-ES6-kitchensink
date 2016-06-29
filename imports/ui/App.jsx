import React from 'react'
import { Link } from 'react-router'
import { IonBody } from 'reactionic'
import { getPlatform } from '../util/getPlatform.js'

export default class App extends React.Component {

  constructor(props) {
    super()
    console.log(props.location.query.platformOverride)
    this.state = {
      platformOverride: props.location.query.platformOverride
    }
  }


  render() {
    const platform = getPlatform(this.state.platformOverride)
    return (
      <IonBody platform={platform} location={this.props.location} >
        {this.props.children}
      </IonBody>

    )
  }

}
