import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Donut extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            options: {
                  title: {
                    text: "Largest US Cities By Population",
                    align: "center",
                    margin: 20,
                    offsetY: 20,
                    style: {
                      fontSize: "25px"
                    }
                  }
                  },
            series: [
                8550405,
                3971883,
                2720546,
                2296224,
                1567442,
                1563025,
                1469845,
                1394928,
                1300092,
                1026908]
                ,
            labels: [  "New York",
            "Los Angeles",
            "Chicago",
            "Houston",
            "Philadelphia",
            "Phoenix",
            "San Antonio",
            "San Diego",
            "Dallas",
            "San Jose"]
          }
        }
   
    
    render() {
        return ( 
            <div>
              <Chart 
              options = {this.state.options}
              series = {this.state.series}
              type = "donut"
              width = "50%"
              align = "center"
              
        />
           </div>
        );
    }
}
export default Donut;