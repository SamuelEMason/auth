import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	authToken: null,
	user: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthToken: (state, action) => {
			state.authToken = action.payload;
		},
		setUser: (state, action) => {
			state.user = action.payload;
		},
		clearAuthData: (state) => {
			state.authToken = null;
			state.user = null;
		},
	},
});

export const { setAuthToken, setUser, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
