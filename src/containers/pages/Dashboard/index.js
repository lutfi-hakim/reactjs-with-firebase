import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDataToAPI } from '../../../config/redux/action';
import './dashboard.scss';

class Dashboard extends Component {
    state = {
        title: '',
        content: '',
        date: ''
    }
    handleSaveNotes = () => {
        const { title, content } = this.state;
        const { saveNotes } = this.props;

        const data = {
            title: title,
            content: content,
            date: new Date().getTime(),
            userId: this.props.userData.uid
        }
        // console.log(data);
        saveNotes(data);
    }
    onInputChange = (e, type) => {
        this.setState({
            [type]: e.target.value
        })
    }
    render() {
        const { title, content, date } = this.state
        return (
            <div className="container">
                <div className="input-form">
                    <input type="text" placeholder="title" className="input-title" value={title} onChange={(e) => this.onInputChange(e, 'title')} />
                    <textarea type="text" placeholder="content" className="input-content" value={content} onChange={(e) => this.onInputChange(e, 'content')}>

                    </textarea>
                    <button className="save-btn" onClick={this.handleSaveNotes}>simpan</button>
                </div>
                <hr />
                <div className="card-content">
                    <p className="title">title</p>
                    <p className="date">21 oktober</p>
                    <p className="content">content notes</p>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    userData: state.user
})

const reduxDispatch = (dispatch) => ({
    saveNotes: (data) => dispatch(addDataToAPI(data))
})

export default connect(reduxState, reduxDispatch)(Dashboard);