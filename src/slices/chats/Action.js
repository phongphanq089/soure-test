import axios from "axios";
import {
  FETCH_CHAT_SUCCESS, MSG_SUBMIT, SEARCH_USER, SELECTED_CHAT
} from "../../configs/constants";

export const fetchChats = () => async ( dispatch ) => {
  axios
    .get( "/api/pages/data/chat/ChatData" )
    .then( ( response ) => {
      dispatch( {
        type: FETCH_CHAT_SUCCESS,
        chats: response.data,
      } );
      console.log( chats );
    } )
    .catch( ( err ) => err );
};

// ///////////////////////////////////////////
// Axios part Reducers
// //////////////////////////////////////////

export const fetchChatsSuccess = ( chats ) => ( {
  type: FETCH_CHAT_SUCCESS,
  payload: chats,
} );

export const openChat = ( id ) => ( {
  type: SELECTED_CHAT,
  id,
} );

export const chatSearch = ( searchTerm ) => ( {
  type: SEARCH_USER,
  searchTerm,
} );

export const sendMsg = ( id, chatMsg ) => ( {
  type: MSG_SUBMIT,
  id,
  chatMsg,
} );
