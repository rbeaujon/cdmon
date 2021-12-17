export const GET_ALL_POST = 'UPDATE_GIFTWRAP_IN_CART';
export const UPDATE_POST = 'REMOVE_GIFTWRAP_IN_CART';

/** @namespace GiftWrapSpwa/Store/GiftWrap/Action/updateGiftWrapInCart */
export const getPost = (id, info, category) => ({
    type: GET_ALL_POST,
    payload: {
        id,
        info,
        category
    }
});

/** @namespace GiftWrapSpwa/Store/GiftWrap/Action/removeGiftWrapInCart */
export const updatePost = (id, info, category) => ({
    type: UPDATE_POST,
    payload: {
        id,
        info,
        category
    }
});
