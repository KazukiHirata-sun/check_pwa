import React from 'react';
import {render} from 'react-dom';
import Content from './content.js';

class App extends React.Component {
  render () {
    return (
        <div>
            <Content/>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));