import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './header.css'
import {withRouter} from 'react-router-dom'



class Header extends Component {

  handleSelected() {
    
    this.props.onDeleteUser();
    this.props.history.push(`/`);
  }

    render() {

        return (
          <header>
            <nav className="navBar">
              <ul>
                <li>Welcome {this.props.userLogin}</li>
                <li><button onClick={() => { this.handleSelected() }}>Logout</button></li>
              </ul>
            </nav>
          </header>
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
        onDeleteUser: () => {
            dispatch({ type: 'DELETE_USER' });
        }
    };
}

Header.propTypes = {
    userLogin: PropTypes.string,
    history: PropTypes.object
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));