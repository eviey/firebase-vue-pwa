import firebase from 'firebase/app'
import 'firebase/auth'
import Status from './statusCodes'
import Store from './store'

export default {
    init: async function () { 
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyDj5kXz5vxpN7jRAbxLYaFniy3_mP5JBcE",
            authDomain: "mca-talent-portal.firebaseapp.com",
            databaseURL: "https://mca-talent-portal.firebaseio.com",
            projectId: "mca-talent-portal",
            storageBucket: "mca-talent-portal.appspot.com",
            messagingSenderId: "911582336556",
            appId: "1:911582336556:web:12f079833d0da2aa"
        }
        // Initialize Firebase
        try {
            await firebase.initializeApp(firebaseConfig)
        } catch (error) {
            //return Promise.reject()
        }
        firebase.auth().onAuthStateChanged((user) => Store.commit('changeAuthState', user)) // TODO: Best way to handle?
    },
    logIn: async function (email, password) {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)    
        }
        catch(error) {
            if (error.code == 'auth/user-not-found')
                return Status.Auth.UserNotFound
            else
                return Status.Auth.UnknownError
        }
        return Status.Auth.Success
    },
    signUp: async function (email, password) { 
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            //var errorCode = error.code;
            //var errorMessage = error.message;
            // ...
            console.error (error)
          })
    },
    logOut: async function () { 
        await firebase.auth().signOut()
    },
    getAuthState: function () {
        return firebase.auth().currentUser
    }
}