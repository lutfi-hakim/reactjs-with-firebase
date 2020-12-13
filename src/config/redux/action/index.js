import firebase from '../../../config/firebase';


export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({ type: 'CHANGE_USER', value: 'LUTFI HKIM' })
    }, 3000)
}

export const registerUserAPI = (data) => (dispatch) => {
    dispatch({ type: 'CHANGE_LOADING', value: true })
    return (
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                console.log('success: ', res);
                dispatch({ type: 'CHANGE_LOADING', value: false })
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage, errorCode);
                dispatch({ type: 'CHANGE_LOADING', value: false })
            })
    )
}