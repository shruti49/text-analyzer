import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
	name: "alertReducer",
	initialState: {
		msg: "",
		type: "",
	},
	reducers: {
        setAlert(state, action) {
            state.msg = action.payload.msg;
            state.type = action.payload.type;
        },
	},
});

export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;