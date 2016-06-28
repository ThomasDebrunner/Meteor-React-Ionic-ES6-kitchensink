import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'


import App from '../imports/ui/App.jsx'
import About from '../imports/ui/About.jsx'
import Overview from '../imports/ui/Overview.jsx'
import Layout from '../imports/ui/Layout.jsx'

function main() {

}


Meteor.startup(() => {
  render(
    (<Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route component={Layout}>
          <IndexRoute component={Overview}></IndexRoute>
          <Route path='/about' component={About}></Route>
        </Route>
      </Route>
    </Router>),
    document.getElementById('render-target'))

})
