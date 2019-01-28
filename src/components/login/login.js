import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './login.css'
import {withRouter} from 'react-router-dom';


class Login extends Component {
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
        this.props.onAddUser(this.state.value);

        this.props.history.push(`/app`);

    }


    render() {

        return (
            <div className="login">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" disabled={this.state.value === ""} />
            </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userLogin: state.userLogin,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUser: (userLogin) => {
            dispatch({ type: 'ADD_USER', userLogin });
        }
    };
}

Login.propTypes = {
    userLogin: PropTypes.string,
    history: PropTypes.object
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));