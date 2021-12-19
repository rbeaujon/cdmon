import { GET_ALL_SERVER, UPDATE_SHOW_API_NODE, UPDATE_SHOW_API_AISTICA} from './server.actions';

export const getinitialState = () => ({
    server: {
        id: 0,
        location: '',
        system: ''
    },
    showApiNode: "hidden",
    showApiAistica: "hidden"
});

/** @namespace  test/Store/Server/Server/Reducer/serverReducer */
export const serverReducer = (
    state = getinitialState(),
    action
) => {
    const { payload, type } = action;

    switch (type) {
    case GET_ALL_SERVER:
        return { 
            ...state,
            id: payload.id,
            location: payload.location,
            system: payload.system 
            
        }

    case UPDATE_SHOW_API_NODE:
        return {
            ...state,
            showApiNode: payload.isVisible
        }

    case UPDATE_SHOW_API_AISTICA:
        return {
            ...state,
            showApiAistica: payload.isVisible
        }    

        // eslint-disable-next-line no-fallthrough
        default:
            return state;
    }


};

export default serverReducer;
