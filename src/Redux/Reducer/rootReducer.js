import { combineReducers } from "redux";
import CampaignReducer from "./mainReducer/mainReducer";

const rootReducers = combineReducers({
    CampaignReducer:CampaignReducer
});

export default rootReducers;