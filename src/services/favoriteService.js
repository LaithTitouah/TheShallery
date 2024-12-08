import { db } from "../firebaseConfig";
import { loggedInUserId } from "./authService"
import { fetchShowById } from "../services/searchService";
import {
    collection,
    doc,
    query,
    getDocs,
    setDoc,
    orderBy,
    limit,
    where
  } from "firebase/firestore"

  export async function getMyFavorites() {
    try {
      const querySnapshot = await getDocs(query(collection(db, 'favorites'), orderBy("score"), where("userId", "==", loggedInUserId())));
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

    const userId = loggedInUserId();
    const result = 
        await setDoc(doc(db, "favorites", `${showId}.${userId}`), {
        showId: showId,
        userId: userId,
        score: selectedScore,


    });

    console.log("Favorite added",  result);

    return true
}