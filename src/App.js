import React, { Component } from 'react';
import Title from './components/title/title'
import CounterContainer from './components/counter-container/counter-container'
import CounterForms from './components/counter-forms/counter-forms'
import Header from './components/header/header'
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      clickCount: 0,
      blocked: false,
      isFirst: true,
      firstClick: "",
      lastClick: ""
    };

    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected() {
    console.log(this.props.countersLimit)
    if (this.props.countersLimit > 0 && this.props.listCounters.length < this.props.countersLimit) {
      this.setState(({ id }) => ({
        id: +new Date()
    }));
      this.props.onAddCounter(this.state);
    }
  }

  reset = () => {
    this.props.onResetCounters();
    
  }

  render() {
    console.log(this.props.listCounters);
    return (
      <div className="App">
      <div>
        <Header/>
      </div>
        <main className="App-header">
          <CounterForms />
          <Title count={this.props.count} />

          <button className="App-button" onClick={() => { this.handleSelected() }}>Add counter</button>
          <button className="App-button" onClick={this.reset}>Reset counters</button>
        </main>
        <div>
        {this.props.listCounters.map(Counter => <CounterContainer key={Counter.id} id={Counter.id}
            ind={this.props.listCounters.indexOf(Counter)} coun={Counter} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    listCounters: state.listCounters,
    countersLimit: state.countersLimit,
  
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCounter: (newCounter) => {
      dispatch({ type: 'ADD_COUNTER' , newCounter});
    },
    onResetCounters: () => {
      dispatch({type: 'RESET_COUNTERS'});
  }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
