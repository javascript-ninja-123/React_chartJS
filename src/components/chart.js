import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {charData:{},width:'',height:''}
  }

  getChartData(){
    this.setState({
      chartData:{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 45]
          }
        ]
      },
      width:100,
      height:100
    })
  }

  componentWillMount() {
    this.getChartData()
  }
  static defaultProps = {
    display:true
  }

  render() {
    return (
      <div className="chart">
        <Bar data={this.state.chartData} width={this.state.width} height={this.state.height} options={{
            title:{
              display:this.props.display,
              text:'Hotest weather'
            }
          }}/>
      </div>
    );
  }
}

export default Chart
