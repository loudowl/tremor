import axios from 'axios';

const initialState = [];

const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';

export const fetchEvents = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3000/api/events');
    dispatch({
      type: FETCH_EVENTS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
