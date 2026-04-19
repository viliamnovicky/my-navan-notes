import { auth, database } from "./firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

// LOGIN / SIGNUP (Google)
export async function login() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Firestore user doc
    const userRef = doc(database, "users", user.email);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        name: user.displayName,
        avatar: user.photoURL,
        createdAt: Date.now(),
      });
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

// GET CURRENT USER
export async function getCurrentUser() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return resolve(null);
      resolve(user);
    });
  });
}

// LOGOUT
export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
}

