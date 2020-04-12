import React from 'react';
import {render} from 'react-dom';
import Content from './content.js';

const port = process.env.PORT || 3000;

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