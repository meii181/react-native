export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const ADD_CHATROOM = 'ADD_CHATROOM';
export const DELETE_CHATROOM = 'DELETE_CHATROOM';

export const toggleHappy = () => {
    return { type: TOGGLE_HAPPY };
};

export const add = () => {
    return { type: ADD };
};

export const subtract = () => {
    return { type: SUBTRACT };
};

export const addChatroom = (chatroomName) => {
    return async (dispatch, getState) => {
        const idToken = getState().user.idToken

        const response = await fetch(
            'https://cbsstudentsweb-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth='
            + idToken, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...

                returnSecureToken: true
            })
        });

        // console.log(await response.json());

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
        } else {
            dispatch({ type: SIGNUP, payload: '' })
        }
    };
};

export const deleteChatroom = (title) => {
    return { type: DELETE_CHATROOM, payload: title }
}

