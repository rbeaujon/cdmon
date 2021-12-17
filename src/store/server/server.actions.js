export const GET_ALL_SERVER = 'GET_ALL_SERVER';
export const UPDATE_SHOW_SERVER = 'UPDATE_SHOW_SERVER';

/** @namespace test/Store/Server/Actions/getServer */
export const getServer = () => ({
    type: GET_ALL_SERVER,
    payload: {}
});

/** @namespace  test/Store/Server/Actions/updateShowServer */
export const updateShowServer = (isVisible) => ({
    type: UPDATE_SHOW_SERVER,
    payload: {
        isVisible
    }
});
