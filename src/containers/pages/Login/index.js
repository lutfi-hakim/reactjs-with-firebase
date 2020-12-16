import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/atoms/Button';
import { loginUserAPI } from '../../../config/redux/action';

class Login extends Component {
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
    handleLoginSubmit = async () => {
        const { email, password } = this.state;
        const { history } = this.props;
        //console.log('before send: ', email, password);
        const res = await this.props.loginAPI({ email, password }).catch(err => err);
        if (res) {
            // console.log('login success', res);
            this.setState({
                email: '',
                password: ''
            });
            history.push('/')
        } else {
            console.log('login error')
        }
    }
    render() {
        return (
            <div className="regist-container">
                <div className="regist-card">
                    <p className="heading-card">Login Page</p>
                    <input className="input" placeholder="Email" id="email" type="text" onChange={this.handleChangeText} value={this.state.email} />
                    <input className="input" placeholder="Password" id="password" type="password" onChange={this.handleChangeText} value={this.state.password} />
                    {/* <button className="btn" onClick={this.handleLoginSubmit}>Register</button> */}
                    <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
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
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login);