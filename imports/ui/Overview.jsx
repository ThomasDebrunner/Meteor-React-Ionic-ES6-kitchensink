import React from 'react'
import { IonContent, IonList, IonItem, IonIcon, IonView } from 'reactionic'

export default class Overview extends React.Component {

  render() {
    return (
        <IonContent {...this.props}>
          <IonList>
            <IonItem link='/about' iconLeft iconRight key='item 1'>
              <IonIcon icon='email' />
              Item 1
              <IonIcon icon='ios-arrow-right' />
              </IonItem>
            <IonItem iconLeft iconRight key='item 2'>
              <IonIcon icon='email'></IonIcon>
              Item 2
              <IonIcon icon='ios-arrow-right' />
            </IonItem>
          </IonList>
        </IonContent>
    )

  }

}
