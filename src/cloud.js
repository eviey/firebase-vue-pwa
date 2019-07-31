import firebase from 'firebase/app'
import 'firebase/auth'
import Status from './statusCodes'
import Store from './store'
import FirebaseConfig from './firebaseConfig.js'

export default {
    init: async function () { 
        try {
            await firebase.initializeApp(FirebaseConfig)
        } catch (error) {
            //return Promise.reject()
        }
        firebase.auth().onAuthStateChanged((user) => {
            Store.commit('changeAuthState', user)
            Store.commit('setAppReady')
        }) // TODO: Best way to handle?
    },
    logIn: async function (email, password) {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)    
        }
        catch (error) {
            if (error.code == 'auth/user-not-found')
                return Status.Auth.UserNotFound
            else
                return Status.Auth.UnknownError
        }
        return Status.Auth.Success
    },
    signUp: async function (email, password) { 
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
        }
        catch (error) {
            if(error.code == 'auth/email-already-in-use')
                return Status.Auth.UserAlreadyExists        
            else 
                return Status.Auth.UnknownError
        }
        return Status.Auth.Success
    },
    logOut: async function () { 
        await firebase.auth().signOut()
    },
    getAuthState: function () {
        return firebase.auth().currentUser
    }
}