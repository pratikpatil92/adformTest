
const initialState = {
    users: null,
  };
  
  export default function CampaignReducer(state = initialState, action) {
    switch (action.type) {
      case "SUCCESS_CAPMAIGN_DATA":
        return {
          ...state,
          users: action.payload,
        };
      case "ADD_DATA":
        return{
          ...state,
          users: action.payload,
        }  
      default:
        return state;
    }
  }