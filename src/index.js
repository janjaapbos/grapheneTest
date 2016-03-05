// fix browser land
import 'babel-polyfill'
// third party imports imports
import React from 'react'
import ReactDOM from 'react-dom'
import Relay from 'react-relay'

import App from './App'

import injectTapEventPlugin from 'react-tap-event-plugin';
// local imports

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

// the root level component for the application
const app = (
    <Relay.RootContainer 
        Component={App.Container}
        route={App.queries}
        onReadyStateChange={({error}) => { if (error) console.error(error) }}
    />
)

// render the routed application
ReactDOM.render(app, document.getElementById('app'))
