import React, { Component } from 'react';
import Bar from './components/Bar';
import Heatmap from './components/Heatmap';
import Line from './components/Line';
import Scatter from './components/Scatter';
import Area from './components/Area';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Bar/>
          <Heatmap/>
          <Line/>
          <Scatter/>
          <Area/>
      </div>
    );
  }
}

export default App;
