const initialState = {
    stella: 'Fresh wine'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                stella: 'Fresh wine'
            };
        default:
            return state;
    }
};