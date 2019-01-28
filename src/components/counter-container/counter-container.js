import React, { Component } from 'react';
import { connect } from 'react-redux';
import './counter-container.css';
import {withRouter} from 'react-router-dom';

class CounterContainer extends Component {



    constructor(props) {
        super(props);

        

        this.handleSelected = this.handleSelected.bind(this);
    }

    increase = () => {
        if (!this.props.coun.blocked) {
            /*if(this.props.coun.isFirst){
                this.setState(({firstTime}) => ({
                    firstClick: new Date() 
                }));
                this.setState(({isFirst}) => ({
                    isFirst: false 
                }));
            }*/

            this.props.onIncreaseCounter(this.props.ind);
            /*
            this.setState(({ lastClick }) => ({
                lastClick: new Date()
            }));
*/
        }

    };
    reset = () => {
        this.props.onResetCounter(this.props.ind);
        
    }
    block = () => {
        this.props.onBlockCounter(this.props.ind);
    }
    details = () => {
        this.props.history.push(`/details`);
    }

    handleSelected(indexCounter) {
        this.props.onDeleteCounter(indexCounter);
    }

    render() {
        let counter_container = "counter-container"
        if (this.props.coun.blocked) {
            counter_container += " blocked"
        }
        console.log(this.props.id);
        console.log(this.props.ind);
        //console.log(this.props.coun);
        return (
            <div className={counter_container}>
                <button onClick={this.increase}>{this.props.coun.clickCount}</button>
                <button className="Delete-button" onClick={() => { this.handleSelected(this.props.ind) }}>Delete</button>
                <button className="Reset-button" onClick={this.reset}>Reset</button>
                <button className="Block-button" onClick={this.block}>Block</button>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.count,
        listCounters: state.listCounters
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteCounter: (indexCounter) => {
            dispatch({ type: 'DELETE_COUNTER', indexCounter });
        },
        onIncreaseCounter: (indexCounter) => {
            dispatch({type: 'INCREASE_COUNTER', indexCounter});
        },
        onResetCounter: (indexCounter) => {
            dispatch({type: 'RESET_COUNTER', indexCounter});
        },
        onBlockCounter: (indexCounter) => {
            dispatch({type: 'BLOCK_COUNTER', indexCounter});
        }
        
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterContainer));