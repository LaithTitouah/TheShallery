import { db } from "../firebaseConfig";
import { loggedInUserId } from "./authService";
import {
  collection,
  doc,
  query,
  getDocs,
  setDoc,
  orderBy,
  limit,
} from "firebase/firestore";

export async function getMyFavorites() {
  const snapshot = await getDocs(
    query(collection(db, "favorites"), orderBy("score", "desc"), limit(20))
  );
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function saveFavorite(showId, selectedScore) {
  const userId = loggedInUserId();
  const result = await setDoc(doc(db, "favorites", `${showId}.${userId}`), {
    showId: showId,
    userId: userId,
    score: selectedScore,
  });

  console.log("Favorite added", result);

  return true;
}
