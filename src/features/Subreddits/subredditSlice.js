import { createSlice } from "@reduxjs/toolkit";

export const subredditSlice = createSlice({
    name: 'content',
    initialState : {
        name: "gaming"
    },
    reducers: {
        updateName(state,action) {
            state.name = action.payload
        }
    }
})

export const{updateName} = subredditSlice.actions;
export default subredditSlice.reducer;