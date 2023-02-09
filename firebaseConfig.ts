import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import env from "lib/env"

const firebaseConfig = {
	apiKey: env.firebaseApiKey,
	authDomain: env.firebaseAuthDomain,
	projectId: env.firebaseProjectId,
	storageBucket: env.firebaseStorageBucket,
	messagingSenderId: env.firebaseMessagingSenderId,
	appId: env.firebaseAppId,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
