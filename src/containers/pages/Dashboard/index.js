import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDataToAPI, getDataFormAPI, updateDataAPI } from '../../../config/redux/action';
import './dashboard.scss';

class Dashboard extends Component {
    state = {
        title: '',
        content: '',
        date: '',
        textButton: 'SIMPAN',
        noteId: ''
    }
    // componentDidMount() {
    //     const userData = localStorage.getItem('userData')
    //     console.log('dashboard: ', JSON.parse(userData))
    // }
    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'))
        this.props.getNotes(userData.uid)
    }
    handleSaveNotes = () => {
        const { title, content, textButton, noteId } = this.state;
        const { saveNotes, updateNotes } = this.props;

        const userData = JSON.parse(localStorage.getItem('userData'))

        const data = {
            title: title,
            content: content,
            date: new Date().getTime(),
            userId: userData.uid
        }
        if (textButton === 'SIMPAN') {
            saveNotes(data);
        } else {
            data.noteId = noteId;
            updateNotes(data)
        }
        // console.log(data);
    }
    onInputChange = (e, type) => {
        this.setState({
            [type]: e.target.value
        })
    }
    updateNotes = (note) => {
        console.log(note);
        this.setState({
            title: note.data.title,
            content: note.data.content,
            textButton: 'UPDATE',
            noteId: note.id
        })
    }
    cancelUpdate = () => {
        this.setState({
            title: '',
            content: '',
            textButton: 'SIMPAN'
        })
    }
    render() {
        const { title, content, textButton } = this.state
        const { notes } = this.props;
        const { updateNotes, cancelUpdate } = this;
        console.log('notes: ', notes);
        return (
            <div className="container">
                <div className="input-form">
                    <input type="text" placeholder="title" className="input-title" value={title} onChange={(e) => this.onInputChange(e, 'title')} />
                    <textarea type="text" placeholder="content" className="input-content" value={content} onChange={(e) => this.onInputChange(e, 'content')}>

                    </textarea>
                    <div className="action-wrapper">
                        {
                            textButton === 'UPDATE' ? (
                                <button className="save-btn cancel" onClick={cancelUpdate}>CANCEL</button>
                            ) : <div />
                        }
                        <button className="save-btn" onClick={this.handleSaveNotes}>{textButton}</button>
                    </div>
                </div>
                <hr />
                {
                    notes.length > 0 ? (
                        <>
                            {
                                notes.map(note => {
                                    return (
                                        <div className="card-content" key={note.id} onClick={() => updateNotes(note)}>
                                            <p className="title">{note.data.title}</p>
                                            <p className="date">{note.data.date}</p>
                                            <p className="content">{note.data.content}</p>
                                        </div>
                                    )
                                })
                            }
                        </>
                    ) : null
                }
            </div>
        )
    }
}

const reduxState = (state) => ({
    userData: state.user,
    notes: state.notes
})

const reduxDispatch = (dispatch) => ({
    saveNotes: (data) => dispatch(addDataToAPI(data)),
    getNotes: (data) => dispatch(getDataFormAPI(data)),
    updateNotes: (data) => dispatch(updateDataAPI(data))
})

export default connect(reduxState, reduxDispatch)(Dashboard);