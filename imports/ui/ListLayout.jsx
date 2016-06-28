import React from 'react'
import { IonView } from 'reactionic'


export default class ListLayout extends React.Component {

  render() {
    return  (
      <IonView>
        {this.props.children}
      </IonView>
    )
  }

}
