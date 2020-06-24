
import { LOAD_PROJECTS } from '../actions/actions';

export const reducer = (state, action) => {
    switch(action.type) {
        case LOAD_PROJECTS:
            return { ...state, projects: action.payload }
        default: return state;
    }
}