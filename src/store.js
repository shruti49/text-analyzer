import { configureStore } from "@reduxjs/toolkit";
import toggleThemeReducer from "./reducers/toggleThemeSlice";
import alertReducer from "./reducers/alertSlice";

export default configureStore({
	reducer: {
		toggleTheme: toggleThemeReducer,
		alert: alertReducer
	},
});
