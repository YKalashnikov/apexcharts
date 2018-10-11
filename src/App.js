import React, { Component } from 'react';
import Bar from './components/Bar';
import Heatmap from './components/Heatmap';
class App extends Component {
  render() {
    return (
      <div className="container">
          <Bar/>
          <Heatmap/>
      </div>
    );
  }
}

export default App;
