import {
    createNewUser,
    switchView
} from './reducers';






export const actions ={
    'CREATE_USER': (...args) => createNewUser(...args),
    'SWITCH_VIEW': (...args) => switchView(...args),
}

