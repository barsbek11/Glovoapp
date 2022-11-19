import { configureStore } from "@reduxjs/toolkit";
import glovoSlice from "./slices/glovoSlice"

export const store = configureStore({
	reducer: {
		glovo: glovoSlice,
	}
})