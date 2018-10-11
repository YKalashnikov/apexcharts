import React, { Component } from 'react';
import Bar from './components/Bar';
import Heatmap from './components/Heatmap';
import Line from './components/Line';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Bar/>
          <Heatmap/>
          <Line/>
      </div>
    );
  }
}

export default App;
