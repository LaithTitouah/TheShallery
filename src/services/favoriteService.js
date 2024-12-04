import { db } from "../firebaseConfig";
import { loggedInUserId } from "./authService"
import { doc, setDoc } from "firebase/firestore"

export function getMyFavorites() {
    return [];

    //Do later
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