import {
    createUser
} from '../firebase/auth'


export function createNewUser(oldStore){
    createUser();
    return Object.assign({}, oldStore)

}


export function switchView(oldStore, options){
    return Promise.resolve().then(_ => {
        return Object.assign({}, oldStore, {
            currentView: options.viewNumber
        })
    })
}