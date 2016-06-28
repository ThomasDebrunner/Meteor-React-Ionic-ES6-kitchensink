import React from 'react';
import { Link } from 'react-router';
import { IonNavView, IonView, IonContent, IonNavBar, IonNavBackButton } from 'reactionic';

export default class Layout extends React.Component {

  render() {
    const leftButton = (<IonNavBackButton icon="ion-ios-arrow-back"
                      color=""
                      type="clear"
                      customClasses="button-stage"
                      />)

    return (
      <IonView {...this.props}>
          <IonNavBar
                     title="Title"
                     leftButton={this.context.location.pathname !== '/'?leftButton:null}
                     {...this.props}
          />

          <IonNavView customClasses="" {...this.props}>
            <IonView customClasses="" {...this.props}>
              {this.props.children}
            </IonView>
          </IonNavView>
        </IonView>
    );
  }
}

Layout.contextTypes = {
  ionSnapper: React.PropTypes.object,
  ionShowPopover: React.PropTypes.func,
  ionPlatform: React.PropTypes.object,
  router: React.PropTypes.object.isRequired,
  location: React.PropTypes.object
}
