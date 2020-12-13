import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div>
                <p>Login Page{this.props.popupProps}</p>
                <button>go to register</button>
                <button>go to dashboard</button>
            </div>
        )
    }
}

const reduxState = (state) => ({
    popupProps: state.popup
})

export default connect(reduxState)(Login);