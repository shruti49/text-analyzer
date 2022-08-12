import { createSlice } from "@reduxjs/toolkit";
//import { setAlert } from "../reducers/alertSlice";

export const toggleThemeSlice = createSlice({
	name: "toggleThemeReducer",
	initialState: {
		value: "dark",
	},
	reducers: {
		setTheme(state, action) {
			if (action.payload !== "light" && action.payload !== "dark") {
				document.body.classList.remove("bg-light");
				document.body.classList.remove("bg-dark");
				document.body.classList.remove("bg-primary");
				document.body.classList.remove("bg-success");
				document.body.classList.remove("bg-warning");
				document.body.classList.remove("bg-danger");
				document.body.style.backgroundColor = "";
				document.body.classList.add(`bg-${action.payload}`);
				document.body.style.backgroundColor = action.payload;
				return;
			}
			if (state.value === "light") {
				state.value = "dark";
				document.body.style.backgroundColor = "#ffffff";
				//showAlert("Dark Mode has been disabled", "success");
				document.title = "Text Analyzer - Light Mode";
			} else if (state.value === "dark") {
				state.value = "light";
				document.body.style.backgroundColor = "#343a40";
				//showAlert("Dark Mode has been enabled", "success");
				document.title = "Text Analyzer - Dark Mode";
			}
		},
	},
});

export const { setTheme } = toggleThemeSlice.actions;

export default toggleThemeSlice.reducer;
