export const GET_ALL_SERVER = 'GET_ALL_SERVER';
export const UPDATE_SHOW_API_NODE = 'UPDATE_SHOW_API_NODE';
export const UPDATE_SHOW_API_AISTICA = 'UPDATE_SHOW_API_AISTICA';

/** @namespace test/Store/Server/Actions/getServer */
export const getServer = () => ({
    type: GET_ALL_SERVER,
    payload: {}
});

/** @namespace  test/Store/Server/Actions/updateShowApiNode */
export const updateShowApiNode = (isVisible) => ({
    type: UPDATE_SHOW_API_NODE,
    payload: {
        isVisible
    }   
});

/** @namespace  test/Store/Server/Actions/updateShowApiAistica */
export const updateShowApiAistica = (isVisible) => ({
    type: UPDATE_SHOW_API_AISTICA,
    payload: {
        isVisible
    }   
});
