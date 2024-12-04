import { db } from "../firebaseConfig";
import { loggedInUserId } from "./authService"
import {
    collection,
    doc,
    query,
    getDocs,
    addDoc,
    setDoc,
    orderBy,
    limit,
    Timestamp,
  } from "firebase/firestore"

  export async function fetchArticles() {
    const snapshot = await getDocs(
      query(collection(db, "favorites"), limit(20))
    )
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  }

export async function saveFavorite(showId) {

    const userId = loggedInUserId();
    const result = await setDoc(doc(db, "favorites", `${showId}.${userId}`), {
        showId: showId,
        userId: userId,
    });

    console.log("Favorite added",  result);

    return true
}