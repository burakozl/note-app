import { configureStore } from "@reduxjs/toolkit";
import notesAppSlice from "./noteApp/notesAppSlice";

export const store = configureStore({
    reducer: {
        notesApp: notesAppSlice,
    },
});