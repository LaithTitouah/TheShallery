import { db } from "../firebaseConfig";
import { loggedInUserEmail } from "./authService"
import { fetchShowById } from "../services/searchService";
import {
    collection,
    doc,
    query,
    getDocs,
    setDoc,
    deleteDoc,
    orderBy,
    where,
  } from "firebase/firestore"

  export async function getMyFavorites({ id }) {
    try {
      console.log(id)
      const querySnapshot = await getDocs(query(collection(db, 'favorites'), orderBy("score"), where("userId", "==", `${id}`)));
      const favoriteShows = [];
  
      for (const doc of querySnapshot.docs) {
        const data = doc.data();
        const showData = await fetchShowById(data.showId); 
        favoriteShows.push({ id: doc.id, ...showData, score: data.score });
      }
  
      return favoriteShows; 
    } catch (error) {
      console.error('Error fetching favorites:', error);
      return [];
    }
  }

export async function saveFavorite(showId, selectedScore) {

    const userId = loggedInUserEmail();
    console.log(userId)
    const result = 
        await setDoc(doc(db, "favorites", `${showId}_${userId}`), {
        showId: showId,
        userId: userId,
        score: selectedScore,
    });

    console.log("Favorite added",  result);

    return true
}

export async function deleteFavorite({ showId }) {
  try {

    // Delete the document from Firestore
    await deleteDoc(doc(db, "favorites", `${showId}`));

    console.log("Favorite Deleted:", {showId});
    return true;
  } catch (error) {
    console.error("Error deleting favorite:", error);

  return false;
  };
}