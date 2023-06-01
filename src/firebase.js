import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBKz32KZKdwhX0OsIE5333FHCAWKIUXDqs",
	authDomain: "restaurant-fa75a.firebaseapp.com",
	projectId: "restaurant-fa75a",
	storageBucket: "restaurant-fa75a.appspot.com",
	messagingSenderId: "922520883275",
	appId: "1:922520883275:web:bdb6d3a4afbab73c847dce",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
