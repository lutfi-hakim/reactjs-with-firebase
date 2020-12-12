import React, { Component } from 'react';
import "./register.scss";
import firebase from '../../../config/firebase';

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
    handleRegisterSubmit = () => {
        const { email, password } = this.state;
        console.log('before send: ', email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                console.log('success: ', res);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    render() {
        return (
            <div className="regist-container">
                <div className="regist-card">
                    <p className="heading-card">Register Page</p>
                    <input className="input" placeholder="Email" id="email" type="text" onChange={this.handleChangeText} />
                    <input className="input" placeholder="Password" id="password" type="password" onChange={this.handleChangeText} />
                    <button className="btn" onClick={this.handleRegisterSubmit}>Register</button>
                </div>
                {/* <button>go to dashboard</button> */}
            </div>
        )
    }
}
export default Register;