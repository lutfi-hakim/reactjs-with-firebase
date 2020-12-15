import React, { Component } from 'react';
import "./register.scss";
import firebase from '../../../config/firebase';
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { registerUserAPI } from '../../../config/redux/action';

class Register extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChangeText = (e) => {
        //console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleRegisterSubmit = async () => {
        const { email, password } = this.state;
        // console.log('before send: ', email, password);
        const res = await this.props.registerAPI({ email, password }).catch(err => err);
        if (res) {
            this.setState({
                email: '',
                password: ''
            })
        }
    }
    render() {
        return (
            <div className="regist-container">
                <div className="regist-card">
                    <p className="heading-card">Register Page</p>
                    <input className="input" placeholder="Email" id="email" type="text" onChange={this.handleChangeText} value={this.state.email} />
                    <input className="input" placeholder="Password" id="password" type="password" onChange={this.handleChangeText} value={this.state.password} />
                    {/* <button className="btn" onClick={this.handleRegisterSubmit}>Register</button> */}
                    <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading} />
                </div>
                {/* <button>go to dashboard</button> */}
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register);