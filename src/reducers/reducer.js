export const reducer = (state, action) => {
    switch(action.type) {
        case 'loadProjects':
            return { ...state, projects: action.value }
        default: return state;
    }
}