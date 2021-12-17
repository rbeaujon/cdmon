import { GET_ALL_POST, UPDATE_POST} from '../actions/mainActions';

export const getinitialState = () => ({
    post: [{
        id: '',
        info: '',
        category: ''
    }]
});

export const mainReducer = (
    state = getinitialState(),
    action
) => {
    const { payload, type } = action;

    switch (type) {
    case GET_ALL_POST:
        return { 
            ...state,
            id: payload.id,
            info: payload.info,
            category: payload.category 
            
        }

    case UPDATE_POST:
        return {
            ...state,
            id: payload.id
        }

        // eslint-disable-next-line no-fallthrough
        default:
            return state;
    }


};

export default mainReducer;
