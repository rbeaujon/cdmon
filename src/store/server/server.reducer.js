import { GET_ALL_SERVER, UPDATE_SHOW_SERVER } from './server.actions';

export const getinitialState = () => ({
    server: {
        id: 0,
        location: '',
        system: ''
    },
    showServer: "hidden"
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

    case UPDATE_SHOW_SERVER:
        return {
            ...state,
            showServer: payload.isVisible
        }

        // eslint-disable-next-line no-fallthrough
        default:
            return state;
    }


};

export default serverReducer;
