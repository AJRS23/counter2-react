import React, { Component } from 'react';
import { connect } from 'react-redux';
import './counter-forms.css'

class LimitForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault();
        this.props.onAddLimit(this.state.value);


    }

    render() {
        return (
            <div className="counterform">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Counters Limit:
                <input type="number" min={this.props.listCounters.length} max="100" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        listCounters: state.listCounters,
        countersLimit: state.countersLimit
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddLimit: (countersLimit) => {
            dispatch({ type: 'ADD_LIMIT', countersLimit });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LimitForm);