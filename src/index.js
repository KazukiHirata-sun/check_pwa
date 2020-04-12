import React from 'react';
import {render} from 'react-dom';
import Content from './content.js';

const port = process.env.PORT || 3000;

const ContentLogo = 'https://chojugiga.com/c/choju57_0019/s512_choju57_0019_0.png'
const ContentLogo2 = 'https://chojugiga.com/c/choju57_0019/s512_choju57_0019_1.png'

class App extends React.Component {
  constructor(props) { 
    super(props)
    this.state = { 
      logo: ContentLogo,
      flag: false 
    }
  }
  onClick(e) {
    if (this.state.flag) {
      this.setState( {logo: ContentLogo} )
    } else {
      this.setState( {logo: ContentLogo2} )
    }
    this.setState( {flag: !this.state.flag} )
  }
  render () {
    return (
        <div onClick = { this.onClick.bind(this) }>
            <Content logo ={ this.state.logo }/>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));