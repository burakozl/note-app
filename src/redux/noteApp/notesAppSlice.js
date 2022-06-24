import { createSlice } from '@reduxjs/toolkit';

export const notesAppSlice = createSlice({
    name: 'notesApp',
    initialState: {
        items: [
            {
                id: '1',
                value: 'Note 1',
                color: 'green',
            },
            {
                id: '2',
                value: 'Note 2',
                color: 'blue',
            },
            {
                id: '3',
                value: 'Note 3',
                color: 'gold',
            }
        ],
        filtered: "",
        colors: [
            {
                id: 1,
                code: 'blue',
                selected: false
            },
            {
                id: 2,
                code: 'gold',
                selected: true
            },
            {
                id: 3,
                code: 'pink',
                selected: false
            },
            {
                id: 4,
                code: 'purple',
                selected: false
            },
            {

                id: 5,
                code: 'green',
                selected: false
            },
        ],
    },
    reducers: {
        addNote: (state,action) => {
            state.items.push(action.payload);
        },
        selectColor: (state,action) => {
            state.colors.forEach(color => {
                color.selected = false;
            });
            const selectedColor = state.colors.find(color => color.code === action.payload);
            selectedColor.selected = !selectedColor.selected;
        },
        searchNote: (state,action) => {     
             state.filtered = action.payload.toLowerCase();
        },
        deleteNote: (state,action) => {
            const id = action.payload;
            const filtered = state.items.filter(item => item.id !== id);
            state.items = filtered;
        }
    },
})

export const { addNote, selectColor, searchNote, deleteNote } = notesAppSlice.actions;
export default notesAppSlice.reducer;