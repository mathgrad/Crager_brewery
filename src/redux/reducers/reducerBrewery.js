import * as actions from "../actions/actionTypes";
import initState from "./state";

const reducerBrewery = (state = initState, action) => {
    switch(action.type){
        case actions.SINGLE_BREWERY_ID:{
            return state;
        }
        case actions.ALL_BREWERY:{
            return state;
        }
        case actions.ALL_BREWERY_CITY:{
            return state;
        }
        case actions.ALL_BREWERY_DISTANCE:{
            return state;
        }
        case actions.ALL_BREWERY_NAME:{
            return state;
        }
        case actions.ALL_BREWERY_POSTAL:{
            return state;
        }
        case actions.ALL_BREWERY_TYPE:{
            return state;
        }
        case actions.SEARCH_BREWERY:{
            return state;
        }
        default:
            return state;
    }
}

export default reducerBrewery;