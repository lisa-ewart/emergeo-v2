import {
    createUser
} from '../firebase/auth'


export function createNewUser(oldStore){
    createUser();
    return Object.assign({}, oldStore)

}