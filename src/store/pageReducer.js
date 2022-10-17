const intitialState = {
    openLogin: false,
    openRegister: false,
}

export default function pageReducer(state = intitialState, action) {
    switch (action.type) {
        case ('page/openLogin'):
            return {
                openLogin: true
            }
        case ('page/openRegister'):
            return {
                openRegister: true
            }
        case ('page/closeLogin'):
            return {
                openLogin: false
            }
        case ('page/closeRegister'):
            return {
                openRegister: false
            }
        default:
            return state
    }
}