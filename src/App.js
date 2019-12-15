import React, { Component } from 'react';
import Header from './components/Header';
import DateForm from './components/DateForm';
import Dates from './components/Dates';
import './css/bootstrap.min.css';

class App extends Component{
  state ={
    dates : []
  }
  
  componentDidMount(){
    const datesLS = localStorage.getItem('dates');
    if (datesLS ){
      this.setState({
        dates: JSON.parse(datesLS)
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem('dates', JSON.stringify(this.state.dates));
  }

  createNewDate = data => {
    const dates = [...this.state.dates, data];

    this.setState({
      dates
    })
  }
  
  deleteDate = id => {
    const actualDates = [...this.state.dates];
    const dates = actualDates.filter(date => date.id !== id);
    this.setState({
      dates
    })
  }

  render(){
    return(
      <div className='container'>
        <Header 
          title='Veterinay patients manager'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <DateForm 
              createNewDate={this.createNewDate}
            />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <Dates 
              dates={this.state.dates}
              deleteDate={this.deleteDate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
