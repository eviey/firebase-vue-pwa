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
            else if(error.code == 'auth/wrong-password')
                return Status.Auth.InvalidPassword
            else
                return Status.Auth.UnknownError
        }
        return Status.Auth.Success
    },
    googleLogIn: async function () {
        try {
            let provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider)
            return Status.Auth.Success
        }
        catch (error) {
            if (error.code == 'auth/operation-not-allowed') 
                return Status.Auth.OperationNotAllowed
            else
                return Status.Auth.UnknownError
        }
    },
    signUp: async function (email, password) { 
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
        }
        catch (error) {
            console.log(error.code)
            if(error.code == 'auth/email-already-in-use')
                return Status.Auth.UserAlreadyExists        
            else if(error.code == 'auth/weak-password')
                return Status.Auth.WeakPassword
            else 
                return Status.Auth.UnknownError
        }
        return Status.Auth.Success
    },
    logOut: async function () {
        try {
            await firebase.auth().signOut()
        }
        catch (error) {
            return Status.Auth.UnknownError
        }
        return Status.Auth.Success
    },
    getAuthState: function () {
        return firebase.auth().currentUser
    }
}