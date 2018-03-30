import axios from 'axios';

const initialState = {
    username: '',
    password: '',
    img: ''
}



export default function reducer(state = initialState, action) {
    switch( action.type) {
        default:
            return state;
    }    
}
